<template>
  <div class="flex flex-col items-center justify-center min-h-[80vh] px-4">
    <!-- Title -->
    <h1 class="text-2xl font-bold mb-8">Redirecting to Discord...</h1>
    
    <!-- Progress bar -->
    <div class="w-full max-w-md mb-12">
      <UProgress v-model="progress" color="pixelgreen" size="lg"/>
      <p class="text-center mt-2 text-sm text-gray-500">
        Redirecting in {{ Math.ceil(remainingTime) }} seconds...
      </p>
    </div>
    
    <UButton
      size="xl"
      :to="discordLink"
      class="green-button mt-4 text-lg px-8 py-4"
      icon="i-simple-icons-discord"
    >
      Don't wait - Join Now
    </UButton>
  </div>
</template>

<script setup>
useHead({
  title: 'Discord',
});

const { config } = useSiteConfig();

const discordLink = computed(() => config.siteLinks?.['discord-invite'] || '/maintenance');

// Progress state
const progress = ref(0);
const totalTime = 3; // seconds
const remainingTime = ref(totalTime);
const interval = 50; // ms

let timer;

onMounted(() => {
  const startTime = Date.now();

  timer = setInterval(() => {
    const elapsed = (Date.now() - startTime) / 1000;
    remainingTime.value = Math.max(0, totalTime - elapsed);

    const rawProgress = (elapsed / totalTime) * 100;
    progress.value = Math.min(100, Math.max(0, Math.round(rawProgress)));

    if (elapsed >= totalTime) {
      clearInterval(timer);
      window.location.href = discordLink.value;
    }
  }, interval);
});

onBeforeUnmount(() => {
  if (timer) clearInterval(timer);
});
</script>