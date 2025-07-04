<template>
    <div class="flex flex-col items-center justify-center gap-8 pt-8">
      <h1 class="mt-10 home-title">
        Kizuren.dev
      </h1>

      <p class="text-center text-sm sm:text-base mb-2">
        For the latest updates, join the <ULink to="/discord" class="text-pixel-green hover:text-pixel-green-hover">discord server</ULink>
      </p>
  
      <div class="flex items-center gap-2 mt-6">
        <UButtonGroup>
            <UButton
                label="Discord"
                icon="i-simple-icons-discord"
                to="/discord"
                target="_blank"
                class="green-button"
            />

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

      <!-- Responsive Grid - 1 column on mobile, 2 columns on larger screens -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-10 sm:pt-16 max-w-3xl px-4 sm:px-0">
        <UButton
            v-for="button in config.buttons"
            :key="button.url"
            class="big-button"
            :to="button.url"
            size="lg"
        >
            <div class="flex flex-col gap-2">
              <div class="flex items-center gap-3">
                  <UIcon :name="button.icon" class="w-5 h-5" />
                  <span class="label">{{ button.title }}</span>
              </div>
              <span v-if="button.description" class="description">
                  {{ button.description }}
              </span>
            </div>
        </UButton>
      </div>
    </div>
</template>

<script setup>
useHead({
  title: 'Kizuren'
})

const { config } = useSiteConfig()
</script>

<style>
.big-button {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 1.5rem; /* p-6 */
  min-height: 3.5rem; /* h-48 */
  width: 100%;
  text-align: left;
  box-shadow: 4px 4px 0 #0f0;
  border-radius: 0.5rem; /* rounded-lg */
  border: 2px solid #0f0;
  background-color: #000;
  color: white;
  transition: all 0.3s;
}

.label {
  font-size: 1.125rem; /* text-lg */
  font-weight: 600; /* font-semibold */
  color: white;
}

.description {
  font-size: 0.75rem;
  color: rgb(156, 163, 175);
}
</style>