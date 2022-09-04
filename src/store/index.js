import { createStore } from "vuex";

const store = createStore({
  state: {
    appName: "ACRE",
    datePlanted: null,
    estimatedYeildDate: null,
    bananaPrice: "Loading...",
    //TODO place and use JSON Objects
    BANANA_LIFE_CYCLE: 6, //in months
  },
  getters: {
    appName(state) {
      return state.appName;
    },
  },
  mutations: {
    setDatePlanted(state, value) {
      state.datePlanted = value;
      this.commit("setEstimatedYeildDate", value);
    },
    setEstimatedYeildDate(state, value) {
      state.estimatedYeildDate = new Date(value);
      state.estimatedYeildDate = state.estimatedYeildDate.setMonth(
        state.estimatedYeildDate.getMonth() + state.BANANA_LIFE_CYCLE
      );
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
