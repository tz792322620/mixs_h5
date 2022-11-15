import Vue from 'vue'
import App from './App.vue'
import router from './router'
import MuseUI from 'muse-ui';
import 'muse-ui/dist/muse-ui.css';
import 'muse-ui-message/dist/muse-ui-message.css';
import Message from 'muse-ui-message';
import 'vant/lib/index.css';
//main.js中全局引入
// import clipboard from 'clipboard';
import VueI18n from 'vue-i18n';
Vue.use(VueI18n);
import Web3 from 'web3'
Vue.prototype.Web3 = Web3
import VueQriously from 'vue-qriously'
import SlideVerify from 'vue-monoplasty-slide-verify';
Vue.use(SlideVerify);
Vue.use(VueQriously)
// Vue.prototype.Clipboard = clipboard
import VueClipboards from 'vue-clipboard2'
Vue.use(VueClipboards);
// 引入echarts
// import echarts from 'echarts'

// Vue.prototype.$echarts = echarts
Vue.config.productionTip = false
Vue.use(MuseUI);
Vue.use(Message);
const i18n = new VueI18n({
  locale: localStorage.getItem('locale') || 'zh',   //从localStorage里获取用户中英文选择，没有则默认中文
  messages: {
    'zh': require('@/assets/lang/zh.js'),
    'en': require('@/assets/lang/en.js')
  }
});

router.beforeEach((to, from, next) => {
  document.body.scrollTop = 0
  document.documentElement.scrollTop = 0
  window.pageYOffset = 0
  next()

});

new Vue({
    el: '#app',
  router,
  i18n,
  render: h => h(App),
}).$mount('#app')
