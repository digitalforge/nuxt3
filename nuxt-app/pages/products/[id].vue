<template>
  <div>
    <ProductDetails :product="product" />
  </div>
</template>

<script setup>
const { id } = useRoute().params
const productURI = `https://fakestoreapi.com/products/${id}`

// fetch the product - why do we add { key: id }?
// I'm glad you asked... by default Nuxt will try to useFetch on the client side to minimize
// the work. When we specify a key ID it will know to perform a new fetch
const { data: product } = await useFetch(productURI, { key: id })

definePageMeta({
  layout: "products",
})
</script>

<style lang="scss" scoped></style>
