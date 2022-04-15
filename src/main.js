import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'

import '@/assets/css/reset.css'
import '@/assets/css/iconfont.css'
import scroll from '@/directive/index'

createApp(App)
  .use(router)
  .use(scroll, {
    greetings: {
      hello: 'Bonjour!'
    }
  })
  .use(createPinia())
  .mount('#app')
