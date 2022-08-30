import { createStore } from "vuex";

const store = createStore({
  state: {
    appName: "ACRE",
    datePlanted: null,
    bananaPrice: "Loading...",
  },
  getters: {
    appName(state) {
      return state.appName;
    },
  },
  mutations: {
    setDatePlanted(state, value) {
      state.datePlanted = value;
      console.log(store.datePlanted);
    },
  },
  actions: {
    //TODO add connections to server
  },
  modules: {
    //
  },
});

export default store;
