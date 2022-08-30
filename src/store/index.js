import { createStore } from "vuex";

const store = createStore({
  state: {
    appName: "ACRE",
    bananaPrice: "Loading...",
  },
  getters: {
    appName(state) {
      return state.appName;
    },
  },
  mutations: {
    //
  },
  actions: {
    //TODO add connections to server
  },
  modules: {
    //
  },
});

export default store;
