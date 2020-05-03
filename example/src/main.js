import Vue from 'vue'
import App from './App.vue'

import BuggyVueLib from 'buggy-vue-lib'
Vue.use(BuggyVueLib)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
