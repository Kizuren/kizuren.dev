export const useLanguage = () => {
  const route = useRoute();
  const requestURL = useRequestURL();
  
  const detectLanguage = () => {
    const hostname = requestURL.hostname;

    // Check for Japanese domain (both IDN and Punycode)
    // キズレン.みんな converts to xn--nck0a4k2a.xn--q9jyb4c
    if (hostname === 'キズレン.みんな' || hostname === 'xn--nck0a4k2a.xn--q9jyb4c') {
      return 'ja';
    }
    
    return 'en';
  };

  const currentLanguage = useState('language', () => detectLanguage());

  const getAlternateUrls = () => {
    const pathname = route.path;
    
    return {
      en: `https://kizuren.dev${pathname}`,
      ja: `https://xn--nck0a4k2a.xn--q9jyb4c${pathname}`,
      default: `https://kizuren.dev${pathname}`
    };
  };

  return {
    currentLanguage,
    getAlternateUrls,
    detectLanguage
  };
};
