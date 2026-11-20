<script setup>
import { GraduationCap } from 'lucide-vue-next'

defineProps({
  page: { type: String, required: true },
})
</script>

<template>
  <header class="app-header">
    <div class="shell header-inner">
      <a class="brand" href="/">
        <span class="brand-icon"><GraduationCap :size="22" aria-hidden="true" /></span>
        Campus<span class="brand-accent">Directory</span>
      </a>
      <nav aria-label="Main navigation">
        <a href="/" :aria-current="page === 'directory' ? 'page' : undefined">Directory</a>
        <a href="/about/" :aria-current="page === 'about' ? 'page' : undefined">About</a>
      </nav>
    </div>
  </header>
</template>
