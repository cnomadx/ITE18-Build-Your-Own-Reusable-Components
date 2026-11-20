<script setup>
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
import DirectoryPage from './pages/DirectoryPage.vue'
import AboutPage from './pages/AboutPage.vue'

defineProps({
  page: { type: String, required: true },
})
</script>

<template>
  <a class="skip-link" href="#main">Skip to content</a>
  <AppHeader :page="page" />
  <main id="main" class="shell main-content" tabindex="-1">
    <AboutPage v-if="page === 'about'" />
    <DirectoryPage v-else />
  </main>
  <AppFooter />
</template>
