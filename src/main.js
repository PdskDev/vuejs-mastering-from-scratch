import App from './App.vue'
import LoaderSpin from './components/Loader/LoaderSpin.vue'
import { createApp } from 'vue'
import router from './Router/routers'

const app = createApp(App)

app.component('LoaderSpinner', LoaderSpin)

app.use(router)
app.mount('#app')
