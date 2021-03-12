export default {
  namespaced: true,
  state: {
    heart: [],
  },
  actions: {
    addHeart(context, id) {
      context.commit('GETHEART');
      context.commit('ADDHEART', id);
      context.dispatch('MessageModules/updateMessage', { message: '已加入收藏', status: 'success' }, { root: true });
    },
    removeHeart(context, id) {
      context.commit('GETHEART');
      context.commit('REMOVEHEART', id);
      context.dispatch('MessageModules/updateMessage', { message: '已取消收藏', status: 'danger' }, { root: true });
    },
  },
  mutations: {
    GETHEART(state) {
      state.heart = JSON.parse(localStorage.getItem('favorite')) || [];
    },
    ADDHEART(state, id) {
      state.heart.push(id);
      localStorage.setItem('favorite', JSON.stringify(state.heart));
    },
    REMOVEHEART(state, id) {
      state.heart.splice(state.heart.indexOf(id), 1);
      localStorage.setItem('favorite', JSON.stringify(state.heart));
    },
  },
  getters: {
    heart: (state) => state.heart,
  },
};
