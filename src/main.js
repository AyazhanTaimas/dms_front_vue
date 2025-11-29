import { createApp } from 'vue'
import App from './App.vue'
// import './assets/styles.css' // глобальные стили (создадим ниже)
import router from './router'

createApp(App)
    .use(router)
    .mount('#app')