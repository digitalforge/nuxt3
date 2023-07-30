<template>
  <div>
    <Head>
      <Title>Nuxt App | {{ product.title }}</Title>
      <Meta name="description" :content="product.description" />
    </Head>
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

if (!product.value) {
  throw createError({
    statusCode: 404,
    message: "Product not found",
    // set fatal to true to force the error to show in case the error pages is requested from the browser
    fatal: true,
  })
}
</script>

<style lang="scss" scoped></style>
