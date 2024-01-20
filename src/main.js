import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router/index'
import './assets/style.css'
import './css/dash-styles.css'
/* import fontawesome */
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faArchway } from '@fortawesome/free-solid-svg-icons'
import { faCheese } from '@fortawesome/free-solid-svg-icons'
import { faHandshakeAngle} from '@fortawesome/free-solid-svg-icons'
import { faCalendarCheck} from '@fortawesome/free-solid-svg-icons'
library.add(faArchway, faCheese, faHandshakeAngle, faCalendarCheck)
const pinia = createPinia()

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.use(pinia)
.use(router)
.mount('#app')
