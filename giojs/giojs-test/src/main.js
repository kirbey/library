// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import THREE from '../node_modules/three/build/three'
import GIO from '../node_modules/giojs/build/gio'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  THREE,
  GIO,
  components: { App },
  template: '<App/>'
})
window.THREE = THREE