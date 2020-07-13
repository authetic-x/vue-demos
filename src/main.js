import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import '@/assets/styles/reset.css'
import Back from '@/components/Back'

Vue.config.productionTip = false;

// 全局Back按钮
Vue.component('Back', Back)

// 路由后退辅助函数
Vue.prototype.$setgoindex = function() {
  if (window.history.length <= 1) {
    if (location.href.indexOf('?') === -1) {
      window.location.href = location.href + '?goIndex=true'
    } else if (location.href.indexOf('?') !== -1 && location.href.indexOf('goIndex=true') !== -1) {
      window.location.href = location.href + '&goIndex=true'
    }
  }
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
