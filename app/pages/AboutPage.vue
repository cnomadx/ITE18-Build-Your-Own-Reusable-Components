<script setup>
import { Component, LayoutTemplate, SlidersHorizontal } from 'lucide-vue-next'
import AppButton from '../components/AppButton.vue'
import InfoCard from '../components/InfoCard.vue'

const topics = [
  {
    title: 'Shared layout',
    icon: LayoutTemplate,
    description: 'AppHeader and AppFooter are mounted once in App.vue. The same layout wraps both the Directory and About pages.',
  },
  {
    title: 'Student data through props',
    icon: Component,
    description: 'The directory loops through the student records and passes each one to StudentCard through its student prop. The card uses that record to render the profile.',
  },
  {
    title: 'Configurable components',
    icon: SlidersHorizontal,
    description: 'These cards reuse InfoCard with different title and description props. AppButton uses label and color props to change its text and appearance.',
  },
]
</script>

<template>
  <section class="about-intro">
    <h1>About the project</h1>
    <p>Campus Directory is a small Vue project that shows how reusable components keep pages consistent and make changes easier.</p>
  </section>
  <div class="info-grid">
    <InfoCard v-for="topic in topics" :key="topic.title" :title="topic.title" :description="topic.description">
      <template #icon><component :is="topic.icon" :size="22" /></template>
    </InfoCard>
  </div>
  <div class="about-actions">
    <AppButton label="Back to directory" color="primary" href="/" />
  </div>
</template>
