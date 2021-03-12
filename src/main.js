import Vue from 'vue';
import Vuex from 'vuex';
import AOS from 'aos';
import VeeValidate from 'vee-validate';
import VueI18n from 'vue-i18n';
import zhTW from 'vee-validate/dist/locale/zh_TW';
import axios from 'axios';
import VueAxios from 'vue-axios';
import Loading from 'vue-loading-overlay';
import './bus';

import App from './App.vue';
import router from './router';
import store from './store';
import 'vue-loading-overlay/dist/vue-loading.css';
import 'bootstrap';
import 'aos/dist/aos.css';

import currency from './filters/currency';
import dateFilter from './filters/date';

Vue.use(VueAxios, axios);
Vue.use(VueI18n);
Vue.use(Vuex);
const i18n = new VueI18n({
  locale: 'zhTW',
});
Vue.use(VeeValidate, {
  events: 'input|blur',
  i18n,
  dictionary: {
    zhTW,
  },
});
AOS.init({
  once: true,
  duration: 800,
});
Vue.component('Loading', Loading);
Vue.filter('currency', currency);
Vue.filter('date', dateFilter);

axios.defaults.withCredentials = true;

Vue.config.productionTip = false;
new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount('#app');

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    const api = `${process.env.VUE_APP_APIPATH}/api/user/check`;
    axios.post(api).then((response) => {
      if (response.data.success) {
        next();
      } else {
        next({
          path: '/login',
        });
      }
    });
  } else {
    next();
  }
});
