export default defineEventHandler(async (event) => {
  const { code } = event.context.params
  const { currencyKey } = useRuntimeConfig()

  const uri = `https://api.currencyapi.com/v3/latest?currencies=${code}&apikey=${currencyKey}`

  // when its s server route ( meaning we're getting data from an API )
  // always use '$fetch'
  const { data } = await $fetch(uri)

  if (!data) {
    console.log("no data")
  }

  return data
})
