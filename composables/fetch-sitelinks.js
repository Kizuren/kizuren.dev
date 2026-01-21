import { ref, reactive, onMounted } from 'vue';

// Shared state to prevent multiple toasts
let toastShown = false;

export function useSiteLinks() {
  const config = reactive({
    siteLinks: {},
    buttons: [],
  });

  const isLoading = ref(true);
  const error = ref(null);
  const toast = useToast();
  const { currentLanguage } = useLanguage();

  const getLocalizedValue = (value) => {
    if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
      return value[currentLanguage.value] || value.en || '';
    }
    return value;
  };

  const localizeArray = (array) => {
    if (!array) return [];
    return array.map(item => ({
      ...item,
      title: getLocalizedValue(item.title),
      description: getLocalizedValue(item.description)
    }));
  };

  async function loadConfig() {
    try {
      toastShown = false;
      isLoading.value = true;

      const response = await fetch('/site-config.json');

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();

      if (!data['site-links'] && !data.projects) {
        throw new Error('Invalid configuration format: Missing required fields');
      }

      config.siteLinks = data['site-links'] || {};
      config.projects = localizeArray(data.projects);
      config.hosted = localizeArray(data.hosted);
      config.games = localizeArray(data.games);
      config.teams = localizeArray(data.teams);

      error.value = null;
    } catch (err) {
      console.error('Failed to load site configuration:', err);
      error.value = err;

      let errorMessage = 'Failed to load site configuration. Please try again later.';

      if (err.message.includes('HTTP error')) {
        const status = err.message.match(/\d+/) ? err.message.match(/\d+/)[0] : 'unknown';
        errorMessage = `Server returned ${status} error. Please check if the configuration file exists.`;
      } else if (err.name === 'SyntaxError') {
        errorMessage = 'Invalid JSON format in configuration file.';
      } else if (err.message.includes('Invalid configuration format')) {
        errorMessage = err.message;
      }

      if (!toastShown) {
        toast.add({
          title: 'Configuration Error',
          description: errorMessage,
          icon: 'i-lucide-alert-triangle',
          color: 'error',
          timeout: 5000,
        });
        toastShown = true;
      }
    } finally {
      isLoading.value = false;
    }
  }

  onMounted(() => {
    loadConfig();
  });

  return {
    config,
    isLoading,
    error,
    reload: loadConfig,
  };
}
