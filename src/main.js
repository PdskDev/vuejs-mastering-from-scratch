import App from './App.vue'
import LoaderSpin from './components/Loader/LoaderSpin.vue'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './Router/routers'

const app = createApp(App)
const pinia = createPinia()

app.component('LoaderSpinner', LoaderSpin)

app.use(pinia)
app.use(router)
app.mount('#app')
