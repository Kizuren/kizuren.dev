<template>
    <div class="flex flex-col items-center justify-center gap-30 pt-20">
      <h1 class="font-bold text-5xl text-(--ui-primary) mt-10">
        This site is in maintenance!
      </h1>
  
      <div class="flex items-center gap-2 mt-16">
        <UButton
            label="Return Home"
            variant="outline"
            color="neutral"
            to="/"
            size="xl"
            class="px-8 text-lg"
            />
      </div>
    </div>
</template>

<script setup>
useHead({
  title: 'Maintenance'
})
</script>