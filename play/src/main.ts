import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { SYIcon } from '@syui/components'

const plugins = [
    SYIcon
]
const app = createApp(App);
plugins.forEach(plugin => {
    app.use(plugin);
});
app.mount('#app');

