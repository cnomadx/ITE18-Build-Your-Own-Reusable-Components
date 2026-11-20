<script setup>
defineProps({
  label: { type: String, required: true },
  color: {
    type: String,
    default: 'primary',
    validator: value => ['primary', 'soft', 'light'].includes(value),
  },
  href: { type: String, default: undefined },
})
</script>

<template>
  <component
    :is="href ? 'a' : 'button'"
    :href="href"
    :type="href ? undefined : 'button'"
    class="app-button"
    :class="'button-' + color"
  >
    {{ label }}
  </component>
</template>
