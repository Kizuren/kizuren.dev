<template>
    <footer class="bg-gray-800 text-white p-4">
        <div class="flex justify-between items-center px-4 sm:px-6 md:px-8">
            <div>© {{ new Date().getFullYear() }} <ULink to="/" class="text-white cursor-default">MarcUs7i.Net</ULink>. All rights reserved.</div>
            <div class="flex gap-4">
                <ULink to="/discord" target="_blank">Discord</ULink>
                <ULink v-if="config.siteLinks.github" :to="config.siteLinks.github" target="_blank">GitHub</ULink>
            </div>
        </div>
    </footer>
</template>

<script setup>
const { config } = useSiteConfig()
</script>