<template>
  <div class="flex flex-col items-center justify-center py-10 px-4">
    <h1 class="text-3xl font-bold mb-9">{{ t.contactPage.title }}</h1>

    <div class="flex items-center gap-2 mt-6">
        <UButtonGroup>
            <UButton
                v-if="config.siteLinks['discord-account']"
                :label="t.contactPage.discord"
                variant="outline"
                icon="i-simple-icons-discord"
                :to="config.siteLinks['discord-account']"
                target="_blank"
                class="green-button"
            />

            <UButton
                :label="t.contactPage.mail"
                variant="outline"
                icon="line-md:email"
                to="mailto:info@kizuren.dev"
                target="_blank"
                class="green-button"
            />
        </UButtonGroup>
      </div>
    
    <div class="w-full max-w-2xl mt-6">
      <UForm 
        :schema="schema" 
        :state="state" 
        class="space-y-8 p-8 rounded-lg shadow-lg" 
        @submit="onSubmit"
      >
        <UFormField 
          :label="t.contactPage.emailLabel" 
          name="email" 
          required 
          class="mb-8"
        >
          <UInput 
            v-model="state.email" 
            :placeholder="t.contactPage.emailPlaceholder"
            size="lg"
            class="w-full" 
          />
        </UFormField>
        
        <UFormField 
          :label="t.contactPage.subjectLabel" 
          name="subject" 
          required 
          class="mb-8"
        >
          <UInput 
            v-model="state.subject" 
            :placeholder="t.contactPage.subjectPlaceholder"
            size="xl"
            class="w-full text-lg" 
          />
        </UFormField>
        
        <UFormField 
          :label="t.contactPage.messageLabel" 
          name="message" 
          required 
          class="mb-8"
        >
          <UTextarea 
            v-model="state.message" 
            :placeholder="t.contactPage.messagePlaceholder" 
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
            {{ t.contactPage.sendButton }}
          </UButton>
        </div>
      </UForm>
    </div>
  </div>
</template>

<script setup lang="ts">
import { z } from 'zod';

const { t } = useTranslations();

useHead({
  title: `${t.value.meta.contactTitle} - ${t.value.name}`,
  meta: [
    { name: 'description', content: t.value.meta.contactDescription },
    { property: 'og:title', content: `${t.value.meta.contactTitle} - ${t.value.name}` },
    { property: 'og:description', content: t.value.meta.contactDescription }
  ]
});

const { config } = useSiteLinks();

const schema = computed(() => z.object({
  email: z
    .string()
    .email({ message: t.value.contactPage.emailRequired })
    .min(1, { message: t.value.contactPage.emailRequired }),
  subject: z.string().min(3, { message: t.value.contactPage.subjectRequired }),
  message: z.string().min(10, { message: t.value.contactPage.messageRequired }),
}));

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

    await $fetch('/api/send-contact', {
      method: 'POST',
      body: {
        email: state.email,
        subject: state.subject,
        message: state.message,
      },
    });

    toast.add({
      title: t.value.contactPage.successTitle,
      description: t.value.contactPage.successDesc,
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
      title: t.value.contactPage.errorTitle,
      description: t.value.contactPage.errorDesc,
      icon: 'i-heroicons-exclamation-circle',
      color: 'error',
    });
  } finally {
    isSubmitting.value = false;
  }
}
</script>