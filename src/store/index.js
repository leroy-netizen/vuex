import { createStore } from "vuex";

export default createStore({
  state: {
    products: [
      { name: "Banana Skin", price: 20, id: 1 },
      { name: "Shiny Star", price: 40, id: 2 },
      { name: "green shells", price: 60, id: 3 },
      { name: "Red shells", price: 80, id: 4 },
    ],
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {},
});
