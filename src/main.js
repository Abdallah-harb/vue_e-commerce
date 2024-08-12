import { createApp } from 'vue'
//import './style.css'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import App from './App.vue'
import router from './router';

// Vuetify
import vuetify from './plugins/vuetify';
import {Emitter} from "./plugins/mitt.js";


const app = createApp(App)

app.use(router)
app.use(vuetify)
app.provide('emitter',Emitter)
app.mount('#app')
