import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    count: localStorage.count ? localStorage.count : 0
  },
  mutations: {
    increment (state) {
      state.count++;
      localStorage.count = state.count;
    }
  }
});

export default store;
