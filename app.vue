<template>
  <UApp>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>

<script setup>
const colorMode = useColorMode();

const favicon = computed(() => {
  const timestamp = Date.now();
  return colorMode.value === 'dark'
    ? `/favicon_black.ico?t=${timestamp}`
    : `/favicon.ico?t=${timestamp}`;
});

useHead({
  link: [
    {
      rel: 'icon',
      type: 'image/x-icon',
      href: favicon.value,
    },
  ],
});

watch(
  () => colorMode.value,
  () => {
    useHead({
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: favicon.value,
        },
      ],
    });
  }
);
</script>