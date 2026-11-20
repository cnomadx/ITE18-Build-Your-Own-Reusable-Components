<script setup>
import { ChevronDown, Search, Users, X } from 'lucide-vue-next'
import { computed, nextTick, ref } from 'vue'
import AppButton from '../components/AppButton.vue'
import StudentCard from '../components/StudentCard.vue'
import { students } from '../students.js'

const search = ref('')
const year = ref('')
const profile = ref(null)
const profileDialog = ref(null)
const years = [...new Set(students.map(student => student.year))].sort()

const filteredStudents = computed(() => {
  const query = search.value.trim().toLowerCase()
  return students.filter(student =>
    (!year.value || student.year === year.value) &&
    [student.name, student.program, student.id].some(value => value.toLowerCase().includes(query)),
  )
})

function resetFilters() {
  search.value = ''
  year.value = ''
}

async function openProfile(student) {
  profile.value = student
  await nextTick()
  profileDialog.value.showModal()
}
</script>

<template>
  <section class="hero">
    <div class="hero-content">
      <span class="hero-caption"><Users :size="17" aria-hidden="true" /> Student information</span>
      <h1>Student Directory</h1>
      <p>Meet the students and explore their programs, year levels, and areas of study.</p>
      <AppButton label="Browse students" color="light" href="#students" />
    </div>
  </section>

  <section id="students" class="directory-section" aria-labelledby="directory-heading">
    <div class="directory-head">
      <div>
        <h2 id="directory-heading">Meet the students</h2>
        <p role="status">{{ filteredStudents.length }} {{ filteredStudents.length === 1 ? 'student' : 'students' }} found</p>
      </div>
      <div class="filters" role="search" aria-label="Filter students">
        <label class="filter-control filter-search">
          <Search :size="19" aria-hidden="true" />
          <span class="sr-only">Search by name, program, or ID</span>
          <input v-model="search" type="search" placeholder="Search students…">
        </label>
        <label class="filter-control filter-year">
          <span class="sr-only">Year level</span>
          <select v-model="year">
            <option value="">All years</option>
            <option v-for="level in years" :key="level">{{ level }}</option>
          </select>
          <ChevronDown :size="17" aria-hidden="true" />
        </label>
      </div>
    </div>

    <div v-if="filteredStudents.length" class="student-grid">
      <StudentCard
        v-for="student in filteredStudents"
        :key="student.id"
        :student="student"
        @view="openProfile"
      />
    </div>
    <div v-else class="empty-state">
      <h3>No matching students</h3>
      <p>Try another name, program, or student ID, or clear the filters.</p>
      <AppButton label="Clear filters" color="primary" @click="resetFilters" />
    </div>
  </section>

  <dialog ref="profileDialog" class="profile-dialog" aria-labelledby="profile-title">
    <form method="dialog">
      <button class="close-dialog" type="submit" aria-label="Close profile" autofocus>
        <X :size="21" aria-hidden="true" />
      </button>
    </form>
    <template v-if="profile">
      <div class="profile-heading">
        <div>
          <h2 id="profile-title">{{ profile.name }}</h2>
          <p>{{ profile.program }} · {{ profile.year }}</p>
        </div>
      </div>
      <p class="profile-bio">{{ profile.bio }}</p>
    </template>
  </dialog>
</template>
