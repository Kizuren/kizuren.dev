<template>
    <footer class="p-4">
        <div class="flex justify-between items-center px-4 sm:px-6 md:px-8">
            <div>© {{ new Date().getFullYear() }} <ULink to="/" class="cursor-default">{{ t.name }}</ULink>. {{ t.footer.rights }}.</div>
            <div class="flex gap-6">
                <ULink :href="alternateUrl" target="_blank">{{ t.footer.switchLanguage }}</ULink>
                <ULink v-if="config.siteLinks['discord-account']" :to="config.siteLinks['discord-account']" target="_blank">{{ t.footer.discord }}</ULink>
                <ULink v-if="config.siteLinks.github" :to="config.siteLinks.github" target="_blank">{{ t.footer.github }}</ULink>
            </div>
        </div>
    </footer>
</template>

<script setup>
const { t, currentLanguage } = useTranslations();
const { config } = useSiteLinks();
const route = useRoute();

const alternateUrl = computed(() => {
  const pathname = route.path;
  if (currentLanguage.value === 'ja') {
    return `https://kizuren.dev${pathname}`;
  } else {
    return `https://キズレン.みんな${pathname}`;
  }
});
</script>