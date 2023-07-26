import './bootstrap';


import { createApp, onMounted } from 'vue'

import router from './routes/index'
import VueSweetalert2 from 'vue-sweetalert2'
import { TailwindPagination } from 'laravel-vue-pagination';
import useAuth from './composables/auth';
import { abilitiesPlugin } from '@casl/vue';
import ability from './services/ability';









const app = createApp({
    setup() {
        const { getUser } = useAuth()
        onMounted(getUser)
    }
})

app.use(VueSweetalert2)
app.use(router)
app.use(abilitiesPlugin, ability)
// app.component('Pagination', LaravelVuePagination)
app.mount('#app')