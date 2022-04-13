<template>
  <div>
    <ProductListOne :products="products" />
    <ProductListTwo :products="products" />
  </div>
</template>
<script>
import ProductListTwo from "./components/ProductListTwo.vue";
import ProductListOne from "./components/ProductListOne.vue";
export default {
  name: "app",
  components: {
    ProductListOne,
    ProductListTwo,
  },

  data() {
    return {};
  },
};
</script>

<style></style>
