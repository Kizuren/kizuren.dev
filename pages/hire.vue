<script lang="ts" setup>
const { currentLanguage } = useLanguage();

const contentPath = computed(() => {
  return currentLanguage.value === 'ja' ? '/hire.ja' : '/hire';
});

const { data: page } = await useAsyncData(
  () => contentPath.value,
  () => queryCollection('content').path(contentPath.value).first()
);

useHead(() => ({
  title: page.value?.title || 'Hire Me - Kizuren',
}));
</script>

<template>
  <template v-if="page">
    <div>
      <ContentRenderer :value="page.body" class="prose dark:prose-invert" />
    </div>
  </template>
  <template v-else>
    <div class="empty-page">
      <h1>404 Page Not Found</h1>
      <p>Oops! The content you're looking for doesn't exist.</p>
      <ULink to="/">Go back home</ULink>
    </div>
  </template>
</template>