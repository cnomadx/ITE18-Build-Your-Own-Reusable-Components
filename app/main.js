import { createApp } from 'vue'
import App from './App.vue'
import '@fontsource-variable/inter'
import './styles.css'

const root = document.querySelector('#app')
createApp(App, { page: root.dataset.page }).mount(root)
