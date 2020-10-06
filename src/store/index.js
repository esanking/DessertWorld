import Vue from 'vue';
import Vuex from 'vuex';

import heartModules from './heart';
import MessageModules from './message';
import productModules from './product';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isloading: false,
    allProducts: [],
    cart: {},
  },
  mutations: {
    LOADING(state, status) {
      state.isloading = status;
    },
  },
  actions: {
    updateLoading(context, status) {
      context.commit('LOADING', status);
    },
    settimeLoading(context) {
      context.dispatch('updateLoading', true);
      setTimeout(() => {
        context.dispatch('updateLoading', false);
      }, 1000);
    },
  },
  modules: {
    heartModules,
    MessageModules,
    productModules,
  },
});
