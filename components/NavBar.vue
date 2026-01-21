<template>
    <header class="p-4">
      <nav class="flex justify-between items-center">
        <div class="logo">
            <ULink as="button" to="/" class="cursor-default">{{ t.name }}</ULink>
        </div>
        <ul class="flex gap-6 md:gap-10">
          <li><ULink to="/hire">{{ t.nav.hire }}</ULink></li>
          <li><ULink to="/contact">{{ t.nav.contact }}</ULink></li>
          <!--<li v-if="config.siteLinks.github"><ULink :to="config.siteLinks.github" target="_blank"><UIcon name="i-simple-icons-github" class="size-5" /></ULink></li>
        <li><ULink to="/discord" target="_blank"><UIcon name="i-simple-icons-discord" class="size-5" /></ULink></li>-->
        </ul>
      </nav>
    </header>
</template>

<script setup>
const { t } = useTranslations();
const { config } = useSiteLinks();
</script>

<style scoped>
a {
  font-family: 'Press Start 2P', monospace;
  transition: all 0.2s steps(2);
}
</style>