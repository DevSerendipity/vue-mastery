import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './index.css'
import { FontAwesomeIcon } from './plugins/font-awesome'

createApp(App)
    .use(router)
    .component('fa', FontAwesomeIcon)
    .use(store)
    .mount('#app')
