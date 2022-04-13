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
  getters: {
    saleProducts: (state) => {
      const saleProducts = state.products.map((product) => {
        ///return an object since all these items are objects with a name and price value
        return {
          name: "*" + product.name + "*",
          price: product.price / 2,
        };
      });
      return saleProducts;
    },
  },
  mutations: {},
  actions: {},
  modules: {},
});
