import Vue from 'vue'
import App from './App.vue'
/* eslint-disable */
export const eventBus = new Vue();

Vue.config.productionTip = false
new Vue({
  render: h => h(App),
}).$mount('#app')
