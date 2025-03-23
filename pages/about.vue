<script lang="ts" setup>
const route = useRoute()
const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection('content').path(route.path).first()
})

useHead(() => ({
  title: page.value?.title || 'About'
}))
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