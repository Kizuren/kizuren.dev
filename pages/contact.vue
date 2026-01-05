<template>
  <div class="flex flex-col items-center justify-center py-10 px-4">
    <h1 class="text-3xl font-bold mb-9">Contact Me</h1>
    
    <div class="w-full max-w-2xl">
      <UForm 
        :schema="schema" 
        :state="state" 
        class="space-y-8 p-8 rounded-lg shadow-lg" 
        @submit="onSubmit"
      >
        <UFormField 
          label="Email Address" 
          name="email" 
          required 
          class="mb-8"
        >
          <UInput 
            v-model="state.email" 
            placeholder="your.email@example.com"
            size="lg"
            class="w-full" 
          />
        </UFormField>
        
        <UFormField 
          label="Message Subject" 
          name="subject" 
          required 
          class="mb-8"
        >
          <UInput 
            v-model="state.subject" 
            placeholder="What is this about?"
            size="xl"
            class="w-full text-lg" 
          />
        </UFormField>
        
        <UFormField 
          label="Your Message" 
          name="message" 
          required 
          class="mb-8"
        >
          <UTextarea 
            v-model="state.message" 
            placeholder="Your message here..." 
            :rows="8"
            size="lg"
            class="w-full" 
          />
        </UFormField>
        
        <div class="flex justify-end mt-10">
          <UButton 
            type="submit" 
            :loading="isSubmitting"
            size="lg"
            class="green-button px-8 py-2"
          >
            Send Message
          </UButton>
        </div>
      </UForm>
    </div>
  </div>
</template>

<script setup lang="ts">
import { z } from 'zod';

useHead({
  title: 'Contact',
});

const schema = z.object({
  email: z
    .string()
    .email({ message: 'Please enter a valid email address' })
    .min(1, { message: 'Email is required' }),
  subject: z.string().min(3, { message: 'Subject must be at least 3 characters' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters' }),
});

const state = reactive({
  email: '',
  subject: '',
  message: '',
});

const isSubmitting = ref(false);
const toast = useToast();

async function onSubmit() {
  try {
    isSubmitting.value = true;

    const discordMessage = {
      embeds: [
        {
          title: `Contact Form: ${state.subject}`,
          description: state.message,
          color: 3447003, // Blue
          fields: [
            {
              name: 'Email',
              value: state.email,
            },
          ],
          timestamp: new Date().toISOString(),
        },
      ],
    };

    await $fetch('/api/send-contact', {
      method: 'POST',
      body: {
        message: discordMessage,
      },
    });

    toast.add({
      title: 'Message Sent!',
      description: 'Your message has been sent successfully.',
      icon: 'i-heroicons-check-circle',
      color: 'pixelgreen',
      ui: {
        root: '',
      },
    });

    state.email = '';
    state.subject = '';
    state.message = '';
  } catch {
    toast.add({
      title: 'Error',
      description: 'Something went wrong. Please try again.',
      icon: 'i-heroicons-exclamation-circle',
      color: 'error',
    });
  } finally {
    isSubmitting.value = false;
  }
}
</script>