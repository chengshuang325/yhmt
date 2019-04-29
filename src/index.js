import Vue from 'vue'
import App from './app.vue'
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'static/css/public.less'
import 'static/css/public-style.less'
Vue.use(ElementUi)
new Vue({
  el: '#app',
  components: {
    App
  },
  template: '<App/>'
})
