<template>
    <footer class="p-4">
        <div class="flex justify-between items-center px-4 sm:px-6 md:px-8">
            <div>© {{ new Date().getFullYear() }} <ULink :to="localePath('/')" class="cursor-default">{{ t.name }}</ULink>. {{ t.footer.rights }}.</div>
            <div class="flex gap-6">
                <ULink :to="switchLanguageUrl">{{ t.footer.switchLanguage }}</ULink>
                <ULink v-if="config.siteLinks['discord-account']" :to="config.siteLinks['discord-account']" target="_blank">{{ t.footer.discord }}</ULink>
                <ULink v-if="config.siteLinks.github" :to="config.siteLinks.github" target="_blank">{{ t.footer.github }}</ULink>
            </div>
        </div>
    </footer>
</template>

<script setup>
const { t } = useTranslations();
const { config } = useSiteLinks();
const { localePath, switchLanguageUrl } = useLanguage();
</script>