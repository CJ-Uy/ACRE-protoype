import { createStore } from "vuex";
import { exportBananaPrice } from "@/assets/javascript/apiCalls";

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
    bananaPrice(state) {
      return state.bananaPrice;
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
    setBananaPrice(state, value) {
      state.bananaPrice = value;
    },
  },
  actions: {
    //TODO add connections to server
    async setBananaPrice() {
      try {
        //BUG Not working something wrong with awaits and stuff
        let price = await exportBananaPrice();
        console.log(price);
        this.commit("setBananaPrice", price);
      } catch (error) {
        this.commit("setBananaPrice", "Error");
        console.log(error);
      }
    },
  },
  modules: {
    //
  },
});

export default store;
