<template>
  <div id="product-list-one">
    <h3>Product list one</h3>
    <ul>
      <li v-for="product in saleProducts" :key="product.id">
        <span class="name">{{ product.name }}</span>
        <span class="price"><i>Ksh</i>{{ product.price }}</span>
      </li>
    </ul>
    <button @click="reducePrice">Reduce price</button>
  </div>
</template>
<script>
export default {
  name: "ProductListOne",

  computed: {
    products() {
      return this.$store.state.products;
    },

    saleProducts() {
      return this.$store.getters.saleProducts;
    },
  },
  methods: {
    reducePrice: function () {
      // this.$store.state.products.forEach((product) => {
      //   product.price -= 1;
      // });

      // this.$store.commit("reducePrice"); // commiting a mutation
      this.$store.dispatch("reducePrice"); // dispatching an action
    },
  },
};
</script>

<style scoped>
#product-list-one {
  background: #fff8b1;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
  margin-bottom: 30px;
  padding: 10px 20px;
}
#product-list-one ul {
  padding: 0;
}
#product-list-one li {
  display: inline-block;
  margin-right: 10px;
  margin-top: 10px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.7);
}
.price {
  font-weight: bold;
  color: #e8800c;
}
</style>
