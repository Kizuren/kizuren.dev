export const useLanguage = () => {
  const route = useRoute();

  const currentLanguage = computed(() =>
    route.path === '/ja' || route.path.startsWith('/ja/') ? 'ja' : 'en'
  );

  const alternatePaths = computed(() => {
    const path = route.path;
    if (currentLanguage.value === 'ja') {
      return { en: path === '/ja' ? '/' : path.slice(3), ja: path };
    }
    return { en: path, ja: path === '/' ? '/ja' : `/ja${path}` };
  });

  const switchLanguageUrl = computed(() =>
    currentLanguage.value === 'ja' ? alternatePaths.value.en : alternatePaths.value.ja
  );

  const localePath = (path) =>
    currentLanguage.value === 'ja' ? (path === '/' ? '/ja' : `/ja${path}`) : path;

  const canonicalUrl = () => `https://kizuren.dev${route.path}`;

  return {
    currentLanguage,
    alternatePaths,
    switchLanguageUrl,
    localePath,
    canonicalUrl
  };
};
