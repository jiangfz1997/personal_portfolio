import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Antd from 'ant-design-vue'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import router from './router'
const vuetify = createVuetify({
    components,
    directives,
  })
  
const app = createApp(App)
app.use(Antd)
app.use(vuetify)
app.use(router)

app.mount('#app')
