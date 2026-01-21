<template>
    <div class="flex flex-col items-center justify-center min-h-[70vh] px-4 py-8">
      <div id="header-box" class="w-full max-w-4xl">
        <div class="intro-content">
          <h1 class="text-5xl sm:text-6xl font-bold mb-4">
            {{ t.greeting }} <span class="text-pixel-green">{{ t.name }}</span>
          </h1>
          
          <p class="text-xl sm:text-2xl text-gray-400 mb-12">
            {{ t.role }}
          </p>

          <div class="text-base sm:text-lg text-gray-300 space-y-6 mb-12 max-w-xl">
            <p>
              {{ t.intro1 }}
            </p>
            <p>
              {{ t.intro2 }} <ULink to="/projects" class="text-pixel-green hover:text-pixel-green-hover font-semibold">{{ t.projects }}</ULink>, 
              {{ t.intro3 }} <ULink to="/projects#games" class="text-pixel-green hover:text-pixel-green-hover font-semibold">{{ t.games }}</ULink> {{ t.intro4 }} <ULink to="/projects#teams" class="text-pixel-green hover:text-pixel-green-hover font-semibold">{{ t.teams }}</ULink> {{ t.intro5 }}
            </p>
          </div>

          <!-- Quick Links -->
          <div class="flex flex-wrap gap-3">
            <UButton
                :label="t.projects"
                icon="i-heroicons-code-bracket"
                to="/projects"
                size="lg"
                class="green-button"
            />
            
            <UButton
                :label="t.games"
                icon="i-heroicons-puzzle-piece"
                to="/projects#games"
                size="lg"
                class="green-button"
            />

            <UButton
                :label="t.contact"
                icon="line-md:email"
                to="/contact"
                target="_blank"
                size="lg"
                class="green-button"
            />

            <UButton
                v-if="config.siteLinks.github"
                :label="t.github"
                variant="outline"
                icon="i-simple-icons-github"
                :to="config.siteLinks.github"
                target="_blank"
                size="lg"
                class="green-button"
            />
          </div>
        </div>

        <div class="profile-picture">
          <NuxtImg src="/icons/flower-r.png" alt="Kizuren" />
        </div>
      </div>
    </div>
</template>

<script setup>
const { t } = useTranslations();
const { config } = useSiteLinks();

useHead({
  title: 'Home - Kizuren',
});
</script>

<style>
#header-box {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  gap: 3rem;
  margin-bottom: 2rem;
}

.intro-content {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.profile-picture {
  flex-shrink: 0;
  width: 200px;
  height: 200px;
}

.profile-picture img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0.5rem;
  border: 3px solid #0f0;
  box-shadow: 4px 4px 0 #0f0;
}

/* Mobile responsive */
@media (max-width: 768px) {
  #header-box {
    flex-direction: column-reverse;
    align-items: center;
    text-align: center;
    gap: 2rem;
  }

  .intro-content {
    align-items: center;
  }

  .profile-picture {
    width: 150px;
    height: 150px;
  }
}

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