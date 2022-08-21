import { createStore } from "vuex";

const store = createStore({
  state: {
    appName: "ACRE",
  },

  getters: {
    appName(state) {
      return state.appName;
    },
  },
});

export default store;
