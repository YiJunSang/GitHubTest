// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
//import 'jquery/dist/jquery.min.js'
//import '_bootstrap@3.3.7@bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
//import '_bootstrap@3.3.7@bootstrap/dist/js/bootstrap.min.js'
import App from './App'
//var App= require('App');
import router from './router'

import './assets/laydate/laydate.js'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'

})
