<template>
    <header class="bg-gray-800 text-white p-4">
      <nav class="flex justify-between items-center">
        <div class="logo">
            <ULink as="button" to="/" class="text-xl text-white cursor-default">MarcUs7i.Net</ULink>
        </div>
        <ul class="flex gap-4">
          <li><ULink to="/about">About</ULink></li>
          <li><ULink to="/contact">Contact</ULink></li>
          <li v-if="config.siteLinks.github"><ULink :to="config.siteLinks.github" target="_blank"><UIcon name="i-simple-icons-github" class="size-5" /></ULink></li>
        <li><ULink to="/discord" target="_blank"><UIcon name="i-simple-icons-discord" class="size-5" /></ULink></li>
        </ul>
      </nav>
    </header>
</template>

<script setup>
const { config } = useSiteConfig()
</script>