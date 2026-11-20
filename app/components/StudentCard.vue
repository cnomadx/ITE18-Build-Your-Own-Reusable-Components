<script setup>
import { BookOpen, CalendarDays, IdCard } from 'lucide-vue-next'
import AppButton from './AppButton.vue'

defineProps({
  student: { type: Object, required: true },
})
defineEmits(['view'])
</script>

<template>
  <article class="student-card" :class="'tone-' + student.tone">
    <div class="student-identity">
      <div>
        <h3>{{ student.name }}</h3>
        <p>{{ student.program }}</p>
      </div>
    </div>
    <dl class="student-fields">
      <div>
        <dt><IdCard :size="17" aria-hidden="true" /> Student ID</dt>
        <dd>{{ student.id }}</dd>
      </div>
      <div>
        <dt><CalendarDays :size="17" aria-hidden="true" /> Year level</dt>
        <dd>{{ student.year }}</dd>
      </div>
      <div>
        <dt><BookOpen :size="17" aria-hidden="true" /> Focus</dt>
        <dd>{{ student.focus }}</dd>
      </div>
    </dl>
    <AppButton
      label="View profile"
      color="soft"
      :aria-label="'View profile for ' + student.name"
      @click="$emit('view', student)"
    />
  </article>
</template>
