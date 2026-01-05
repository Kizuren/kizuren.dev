<template>
    <div class="flex flex-col items-center justify-center gap-30 pt-20">
      <h1 class="font-bold heading-title mt-10">
        This page is in maintenance!
      </h1>
  
      <div class="flex items-center gap-2 mt-16">
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
</template>

<script setup>
useHead({
  title: 'Maintenance',
});
</script>

<style scoped>
.heading-title {
  font-family: 'Press Start 2P', monospace;
  transition: all 0.2s steps(2);
  text-align: center;
  font-size: 1.2rem;
  line-height: 1.5;
  margin: 0 auto;
}

@media (min-width: 640px) {
  .heading-title {
    font-size: 1.8rem;
  }
}

@media (min-width: 768px) {
  .heading-title {
    font-size: 2.5rem;
  }
}

@media (min-width: 1024px) {
  .heading-title {
    font-size: 3rem;
    max-width: 100%;
  }
}
</style>