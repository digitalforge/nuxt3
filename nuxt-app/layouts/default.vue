<template>
  <div>
    <header class="shadow-sm bg-white">
      <nav class="container mx-auto p-4 flex justify-between">
        <NuxtLink class="font-bold" to="/">Nuxt Products</NuxtLink>
        <ul class="flex gap-4">
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/about">About</NuxtLink></li>
          <li><NuxtLink to="/products" class="btn">Products</NuxtLink></li>
          <!-- I added this link here to demonstrate what Nuxt does if it uses a browser link with the error
          This will throw an error in the console saying it doesn't find the page because the link is looking for the 
          page on the client side not requesting it from the server. To combat this we add 'fatal:true' to the error call 
          in [id].vue. It will instead for the error page we created to show instead
          -->
          <li><NuxtLink to="/products/abc">Not a product</NuxtLink></li>
        </ul>
      </nav>
    </header>

    <!-- output the page content -->
    <div class="container mx-auto p-4">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.router-link-exact-active {
  color: #12b488;
}
</style>
