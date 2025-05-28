<template>
  <div class="flex flex-col items-center justify-center gap-8 pt-8">
    <h1 class="font-bold text-5xl mt-10">
      Games
    </h1>

    <div class="games-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
      <UCard
        v-for="game in games"
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
  </div>
</template>

<script lang="ts" setup>
import siteConfig from '~/public/site-config.json'
import { ref, onMounted } from 'vue'

const games = siteConfig.games
const imageCache = ref(new Map())

function getBadgeColor(status: string) {
  if (status === 'Released') return 'pixelgreen'
  if (status === 'Abandoned') return 'error'
  return 'warning'
}

// Check if image exists and cache result
function getImageSrc(game: { [x: string]: any }) {
  // During SSR, just return the URL or fallback
  if (typeof window === 'undefined') {
    return game['logo-url'] || '/cancel.svg'
  }
  
  const url = game['logo-url']
  
  // If no URL or already checked and failed, use cancel.svg
  if (!url || imageCache.value.get(url) === false) {
    return '/cancel.svg'
  }
  
  // If not checked yet, check it now
  if (!imageCache.value.has(url)) {
    checkImage(url)
  }
  
  return url
}

// Function to check if image exists
function checkImage(url: string | null) {
  // Skip this function if not in browser or url is null
  if (typeof window === 'undefined' || url === null) return
  
  const img = new window.Image()
  img.onload = () => {
    imageCache.value.set(url, true)
  }
  img.onerror = () => {
    imageCache.value.set(url, false)
    // Force a component update for this URL
    const affectedGames = games.filter(g => g['logo-url'] === url)
    if (affectedGames.length) {
      // This will trigger a re-render
      imageCache.value = new Map(imageCache.value)
    }
  }
  img.src = url
}

function handleImageError(event: Event) {
  const img = event.target as HTMLImageElement
  img.src = '/cancel.svg'
  
  // Also cache this failure for future renders
  if (img.dataset.originalSrc) {
    imageCache.value.set(img.dataset.originalSrc, false)
  }
}

// Pre-check all images when component is mounted
onMounted(() => {
  games.forEach(game => {
    if (game['logo-url']) {
      checkImage(game['logo-url'])
    }
  })
})

useHead({
  title: 'Games'
})
</script>