<template>
  <div>
    <h2>Products</h2>
    <br />
    <hr />
    <br />
    <div class="grid grid-cols-4 gap-5">
      <div v-for="p in products">
        <!-- data bind product to the component and use 'p' because it will pass the single product -->
        <ProductCard :product="p" />
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "products",
})
// Fetch products
// this fetch code can be run in both the server and the browser
const { data: products } = await useFetch("https://fakestoreapi.com/products")
</script>

<style lang="scss" scoped></style>
