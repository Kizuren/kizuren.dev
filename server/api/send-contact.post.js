export default defineEventHandler(async event => {
  try {
    const body = await readBody(event);
    const { message } = body;

    const webhookUrl = process.env.DISCORD_WEBHOOK;

    if (!webhookUrl) {
      throw new Error('Discord webhook URL is not configured');
    }

    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(message),
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
