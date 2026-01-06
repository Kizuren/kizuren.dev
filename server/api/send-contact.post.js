export default defineEventHandler(async event => {
  try {
    const body = await readBody(event);
    const { email, subject, message } = body;

    // validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      return createError({
        statusCode: 400,
        statusMessage: 'Invalid email',
        message: 'Please provide a valid email address',
      });
    }

    // validate subject
    if (!subject || subject.length < 3) {
      return createError({
        statusCode: 400,
        statusMessage: 'Invalid subject',
        message: 'Subject must be at least 3 characters',
      });
    }

    // validate message
    if (!message || message.length < 10) {
      return createError({
        statusCode: 400,
        statusMessage: 'Invalid message',
        message: 'Message must be at least 10 characters',
      });
    }

    const spaceCount = (message.match(/ /g) || []).length;
    if (spaceCount < 2) {
      return createError({
        statusCode: 400,
        statusMessage: 'Invalid message',
        message: 'Message must contain at least 2 spaces',
      });
    }

    const webhookUrl = process.env.DISCORD_WEBHOOK;

    if (!webhookUrl) {
      throw new Error('Discord webhook URL is not configured');
    }

    const discordMessage = {
      embeds: [
        {
          title: `Contact Form: ${subject}`,
          description: message,
          color: 3447003, // Blue
          fields: [
            {
              name: 'Email',
              value: email,
            },
          ],
          timestamp: new Date().toISOString(),
        },
      ],
    };

    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(discordMessage),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Discord API error: ${response.status} - ${errorText}`);
    }

    return { success: true };
  } catch (error) {
    console.error('Failed to send message to Discord:', error);

    return createError({
      statusCode: 500,
      statusMessage: 'Failed to send message',
      message: error.message || 'An unknown error occurred',
    });
  }
});
