<template>
    <div class="flex flex-col items-center justify-center min-h-[70vh] px-4 py-8">
      <div id="header-box" class="w-full max-w-4xl">
        <div class="intro-content">
          <h1 class="text-5xl sm:text-6xl font-bold mb-4">
            Hi, I'm <span class="text-pixel-green">Kizuren</span>
          </h1>
          
          <p class="text-xl sm:text-2xl text-gray-400 mb-12">
            Developer & Creator
          </p>

          <div class="text-base sm:text-lg text-gray-300 space-y-6 mb-12 max-w-xl">
            <p>
              I'm passionate about creating things and sharing them with the community.
            </p>
            <p>
              Explore my <ULink to="/projects" class="text-pixel-green hover:text-pixel-green-hover font-semibold">projects</ULink>, 
              check out the <ULink to="/projects#games" class="text-pixel-green hover:text-pixel-green-hover font-semibold">games</ULink> I've worked on, 
              or check out the <ULink to="/projects#teams" class="text-pixel-green hover:text-pixel-green-hover font-semibold">teams</ULink> I have been working with.
            </p>
          </div>

          <!-- Quick Links -->
          <div class="flex flex-wrap gap-3">
            <UButton
                label="Projects"
                icon="i-heroicons-code-bracket"
                to="/projects"
                size="lg"
                class="green-button"
            />
            
            <UButton
                label="Games"
                icon="i-heroicons-puzzle-piece"
                to="/projects#games"
                size="lg"
                class="green-button"
            />

            <UButton
                label="Contact"
                icon="line-md:email"
                to="/contact"
                target="_blank"
                size="lg"
                class="green-button"
            />

            <UButton
                v-if="config.siteLinks.github"
                label="GitHub"
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
useHead({
  title: 'Home - Kizuren',
});

const { config } = useSiteLinks();
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