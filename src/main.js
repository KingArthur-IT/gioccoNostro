import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from "./store";
import axios from 'axios'
import VueAxios from 'vue-axios'
import { createI18n } from 'vue-i18n'
import { localesTexts } from './locales/main.js'

const i18n = createI18n({
    locale: 'eng',
    fallbackLocale: 'eng',
    messages: localesTexts, 
})

const app = createApp(App)

app.use(router)
app.use(store)
app.use(VueAxios, axios)
app.use(i18n)

app.mount('#app')
