import Vue from 'vue'
import App from './App.vue'
import router from './router'

import themeConfig from '../lib/ledap-vue-bootstrap.umd.min'
console.log('themeConfig is :\n', themeConfig);

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')