<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps({
  error: Object as () => NuxtError
})
</script>

<template>
  
  <NuxtLayout>
    <div class="flex flex-col items-center justify-center gap-30 pt-20">
      <h1 class="font-bold mt-10 heading-title">
        {{ error?.statusCode == 404 ? "Only you and the void are here..." : "There is nothing to see here!"}}
      </h1>
  
      <div class="flex items-center gap-2 mt-10">
        <UButton
            label="Return Home"
            variant="outline"
            color="pixelgreen"
            to="/"
            size="xl"
            class="green-button px-8 text-lg"
            />
      </div>
    </div>
  </NuxtLayout>
</template>

<style scoped>
.heading-title {
  font-family: 'Press Start 2P', monospace;
  transition: all 0.2s steps(2);
  text-align: center;
  font-size: 1.2rem;
  line-height: 1.5;
  max-width: 90%;
  margin: 0 auto;
}

@media (min-width: 640px) {
  .heading-title {
    font-size: 1.5rem;
    max-width: 80%;
  }
}

@media (min-width: 768px) {
  .heading-title {
    font-size: 1.8rem;
    max-width: 70%;
  }
}

@media (min-width: 1024px) {
  .heading-title {
    font-size: 2.2rem;
    max-width: 60%;
  }
}
</style>