<template>
    <div class="min-h-screen flex flex-col">
        <NavBar />
        <main class="flex-grow container mx-auto px-4 py-8">
            <slot />
        </main>
        <AppFooter />
    </div>
</template>