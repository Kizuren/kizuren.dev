<template>
  <div class="flex flex-col items-center justify-center gap-8 pt-8 pb-12">
    <h1 class="mt-10 home-title">
      Projects
    </h1>

    <div class="flex items-center gap-2 mt-6">
      <UButtonGroup>
        <UButton
          v-if="config.siteLinks.github"
          label="GitHub"
          variant="outline"
          icon="i-simple-icons-github"
          :to="config.siteLinks.github"
          target="_blank"
          class="green-button"
        />

        <UButton
          v-if="config.siteLinks['status-page']"
          label="Status"
          icon="i-simple-icons-statuspage"
          :to="config.siteLinks['status-page']"
          target="_blank"
          class="green-button"
        />
      </UButtonGroup>
    </div>

    <div class="w-full max-w-5xl px-4 mt-10">
      <!-- Navigation -->
      <div class="flex flex-wrap justify-center gap-3 mb-12">
        <UButton
          v-for="section in sections"
          :key="section.id"
          :href="`#${section.id}`"
          class="green-button"
        >
          {{ section.name }}
        </UButton>
      </div>

      <!-- Projects Section -->
      <section id="projects" class="mb-16">
        <h2 class="text-3xl font-bold mb-6">My Projects</h2>
        <div class="space-y-3">
          <a
            v-for="project in config.projects"
            :key="project.url"
            :href="project.url"
            :target="project.url?.startsWith('http') ? '_blank' : undefined"
            class="list-item"
          >
            <div class="flex items-center gap-4">
              <UIcon :name="project.icon" class="w-6 h-6 flex-shrink-0" />
              <div class="flex-grow">
                <h3 class="font-semibold text-lg">{{ project.title }}</h3>
                <p class="text-sm text-gray-400">{{ project.description }}</p>
              </div>
              <UIcon name="i-heroicons-arrow-right" class="w-5 h-5 flex-shrink-0" />
            </div>
          </a>
        </div>
      </section>

      <!-- Hosted Section -->
      <section id="hosted" class="mb-16">
        <h2 class="text-3xl font-bold mb-6">Hosted Services</h2>
        <div class="space-y-3">
          <a
            v-for="service in config.hosted"
            :key="service.url"
            :href="service.url"
            target="_blank"
            class="list-item"
          >
            <div class="flex items-center gap-4">
              <UIcon :name="service.icon" class="w-6 h-6 flex-shrink-0" />
              <div class="flex-grow">
                <h3 class="font-semibold text-lg">{{ service.title }}</h3>
                <p class="text-sm text-gray-400">{{ service.description }}</p>
              </div>
              <UIcon name="i-heroicons-arrow-right" class="w-5 h-5 flex-shrink-0" />
            </div>
          </a>
        </div>
      </section>

      <!-- Games Section -->
      <section id="games" class="mb-16">
        <h2 class="text-3xl font-bold mb-6">Games</h2>
        <div class="games-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <UCard
            v-for="game in config.games"
            :key="game.title"
            class="big-button shadow-lg"
            :ui="{ 
              root: 'flex flex-col shadow-lg rounded-lg ring-1',
              header: 'p-4 pb-0',
              body: 'flex-grow p-4 pt-2',
              footer: 'p-4 pt-0'
            }"
          >
            <!-- Game Logo and Status -->
            <div class="flex items-center justify-between">
              <img
                :src="getImageSrc(game)"
                alt="Game Logo"
                class="w-12 h-12 object-contain"
                @error="handleImageError"
              />
              <UBadge
                :color="getBadgeColor(game.status)"
                variant="soft"
                size="sm"
                class="font-semibold"
              >
                {{ game.status }}
              </UBadge>
            </div>

            <div class="card-content">
              <h2 class="text-xl mt-4">{{ game.title }}</h2>
              <p class="mt-2">{{ game.description }}</p>
            </div>

            <div class="card-footer">
              <USeparator class="my-3" />
              <div class="flex gap-4 mt-2">
                <a
                  v-for="link in game.url || []"
                  :key="link.url"
                  :href="link.url"
                  target="_blank"
                  class="flex items-center gap-2 transition-colors"
                >
                  <UIcon :name="link.logo" class="text-lg" />
                  <span class="text-sm">{{ link.host }}</span>
                </a>
              </div>
            </div>
          </UCard>
        </div>
      </section>

      <!-- Teams Section -->
      <section id="teams" class="mb-16">
        <h2 class="text-3xl font-bold mb-6">Teams</h2>
        <div class="space-y-3">
          <a
            v-for="team in config.teams"
            :key="team.url"
            :href="team.url"
            target="_blank"
            class="list-item"
          >
            <div class="flex items-center gap-4">
              <img
                :src="team.logo"
                :alt="team.title"
                class="w-8 h-8 object-contain flex-shrink-0"
              />
              <div class="flex-grow">
                <h3 class="font-semibold text-lg">{{ team.title }}</h3>
                <p v-if="team.description" class="text-sm text-gray-400">{{ team.description }}</p>
              </div>
              <UIcon name="i-heroicons-arrow-right" class="w-5 h-5 flex-shrink-0" />
            </div>
          </a>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick, watch } from 'vue';

useHead({
  title: 'Projects - Kizuren',
});

const { config } = useSiteLinks();

const sections = [
  { id: 'projects', name: 'Projects' },
  { id: 'hosted', name: 'Hosted' },
  { id: 'games', name: 'Games' },
  { id: 'teams', name: 'Teams' },
];

const imageCache = ref(new Map());

function getBadgeColor(status) {
  if (status === 'Released') return 'pixelgreen';
  if (status === 'Abandoned') return 'error';
  return 'warning';
}

function getImageSrc(game) {
  if (typeof window === 'undefined') {
    return game.logo || '/cancel.svg';
  }

  const url = game.logo;

  if (!url || imageCache.value.get(url) === false) {
    return '/cancel.svg';
  }

  if (!imageCache.value.has(url)) {
    checkImage(url);
  }

  return url;
}

function checkImage(url) {
  if (typeof window === 'undefined' || url === null) return;

  const img = new window.Image();
  img.onload = () => {
    imageCache.value.set(url, true);
  };
  img.onerror = () => {
    imageCache.value.set(url, false);
    imageCache.value = new Map(imageCache.value);
  };
  img.src = url;
}

function handleImageError(event) {
  const img = event.target;
  img.src = '/cancel.svg';

  if (img.dataset.originalSrc) {
    imageCache.value.set(img.dataset.originalSrc, false);
  }
}

function scrollToHash() {
  if (typeof window === 'undefined') return;
  
  const hash = window.location.hash;
  if (hash) {
    nextTick(() => {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }
}

onMounted(() => {
  config.games?.forEach(game => {
    if (game.logo) {
      checkImage(game.logo);
    }
  });
  
  setTimeout(scrollToHash, 100);
});

watch(() => config.projects?.length, (newVal) => {
  if (newVal) {
    scrollToHash();
  }
});
</script>

<style scoped>
.big-button {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 1.5rem;
  min-height: 3.5rem;
  width: 100%;
  text-align: left;
  box-shadow: 4px 4px 0 #0f0;
  border-radius: 0.5rem;
  border: 2px solid #0f0;
  background-color: #000;
  color: white;
  transition: all 0.3s;
}

.list-item {
  display: block;
  padding: 1.25rem;
  border: 2px solid #0f0;
  border-radius: 0.5rem;
  background-color: #000;
  color: white;
  transition: all 0.3s;
  text-decoration: none;
}

.list-item:hover {
  box-shadow: 4px 4px 0 #0f0;
  transform: translate(-2px, -2px);
}

.nav-link {
  text-decoration: none;
  color: #0f0;
  font-weight: 600;
}

section {
  scroll-margin-top: 2rem;
}
</style>