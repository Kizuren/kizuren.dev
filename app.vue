<template>
  <UApp>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>

<script setup>
const colorMode = useColorMode();
const { getAlternateUrls, currentLanguage } = useLanguage();

const favicon = computed(() => {
  const timestamp = Date.now();
  return colorMode.value === 'dark'
    ? `/favicon_black.ico?t=${timestamp}`
    : `/favicon.ico?t=${timestamp}`;
});

const alternateUrls = computed(() => getAlternateUrls());

const headLinks = computed(() => [
  { rel: 'icon', type: 'image/x-icon', href: favicon.value },
  { rel: 'alternate', hreflang: 'en', href: alternateUrls.value.en },
  { rel: 'alternate', hreflang: 'ja', href: alternateUrls.value.ja },
  { rel: 'alternate', hreflang: 'x-default', href: alternateUrls.value.default },
]);

useHead({
  htmlAttrs: { lang: currentLanguage.value },
  link: headLinks,
});
</script>