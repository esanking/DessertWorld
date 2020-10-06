import axios from 'axios';

export default ({
  namespaced: true,
  state: {
    allProducts: [],
    cart: {},
    cartLen: '',
  },
  mutations: {
    ALLPRODUCTS(state, payload) {
      state.allProducts = payload;
    },
    CART(state, payload) {
      state.cart = payload;
    },
    CARTLEN(state, payload) {
      state.cartLen = payload;
    },
  },
  actions: {
    getallProducts(context) {
      context.commit('LOADING', true, { root: true });
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/products/all`;
      axios.get(api).then((response) => {
        context.commit('ALLPRODUCTS', response.data.products);
        context.commit('LOADING', false, { root: true });
      });
    },
    getcart(context) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`;
      context.commit('LOADING', true, { root: true });
      axios.get(api).then((response) => {
        context.commit('CART', response.data.data);
        context.commit('CARTLEN', response.data.data.carts.length);
        context.commit('LOADING', false, { root: true });
      });
    },
    addtoCart(context, { id, qty }) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`;
      const cart = {
        product_id: id,
        qty,
      };
      context.commit('LOADING', true, { root: true });
      axios.post(api, { data: cart }).then((response) => {
        if (response.data.success) {
          context.dispatch('MessageModules/updateMessage', { message: response.data.message, status: 'success' }, { root: true });
          context.dispatch('getcart');
        } else {
          context.dispatch('MessageModules/updateMessage', { message: '加入購物車失敗，請稍後再試', status: 'danger' }, { root: true });
          context.commit('LOADING', false, { root: true });
        }
      });
    },
    changeQty(context, { findCartId, findProductId, SumQty }) {
      const delApi = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart/${findCartId}`;
      const addApi = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`;
      context.commit('LOADING', true, { root: true });
      const cart = {
        product_id: findProductId,
        qty: SumQty,
      };
      axios.all([axios.delete(delApi), axios.post(addApi, { data: cart })])
        .then(axios.spread(() => {
          context.dispatch('getcart');
        }))
        .catch(() => {
          context.dispatch('MessageModules/updateMessage', { message: '加入購物車失敗，請稍後再試', status: 'danger' }, { root: true });
          context.commit('LOADING', false, { root: true });
        });
    },
  },
  getters: {
    allProducts: (state) => state.allProducts,
    cart: (state) => state.cart,
    cartLen: (state) => state.cartLen,
  },
});
