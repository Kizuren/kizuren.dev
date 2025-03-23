<template>
    <div class="flex flex-col items-center justify-center gap-8 pt-8">
      <h1 class="font-bold text-5xl text-(--ui-primary) mt-10">
        MarcUs7i.Net
      </h1>
  
      <div class="flex items-center gap-2 mt-6">
        <UButtonGroup>
            <UButton
                label="Discord"
                icon="i-simple-icons-discord"
                to="/discord"
                target="_blank"
            />

            <UButton
                v-if="config.siteLinks.github"
                label="GitHub"
                color="neutral"
                variant="outline"
                icon="i-simple-icons-github"
                :to="config.siteLinks.github"
                target="_blank"
            />

            <UButton
                v-if="config.siteLinks['status-page']"
                label="Status"
                color="neutral"
                icon="i-simple-icons-statuspage"
                :to="config.siteLinks['status-page']"
                target="_blank"
            />
        </UButtonGroup>
      </div>

      <!-- 2x2 Grid of Smaller Buttons -->
      <div class="grid grid-cols-2 gap-4 pt-16 max-w-3xl">
        <UButton
            v-for="button in config.buttons"
            :key="button.url"
            class="big-button"
            :to="button.url"
            size="lg"
        >
            <div class="flex flex-col gap-2">
              <div class="flex items-center gap-3">
                  <UIcon :name="button.icon" class="w-5 h-5 text-green-500" />
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
  title: 'Marcus7i.Net'
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
  border-radius: 0.5rem; /* rounded-lg */
  border: 1px solid rgb(55, 65, 81); /* border border-gray-700 */
  background-color: rgb(31, 41, 55); /* bg-gray-800 */
  color: white;
  transition: all 0.3s;
}

.big-button:hover {
  border-color: rgb(34, 197, 94); /* border-green-500 */
  background-color: rgb(17, 24, 39); /* bg-gray-900 */
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1); /* shadow-lg */
}

.label {
  font-size: 1.125rem; /* text-lg */
  font-weight: 600; /* font-semibold */
  color: white;
}

.description {
  font-size: 0.875rem; /* text-sm */
  color: rgb(156, 163, 175); /* text-gray-400 */
}
</style>