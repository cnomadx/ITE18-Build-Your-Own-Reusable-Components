<script setup>
defineProps({
  title: { type: String, required: true },
  description: { type: String, required: true },
})
</script>

<template>
  <article class="info-card">
    <span v-if="$slots.icon" class="info-icon" aria-hidden="true"><slot name="icon" /></span>
    <div>
      <h2>{{ title }}</h2>
      <p>{{ description }}</p>
    </div>
  </article>
</template>
