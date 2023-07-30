export default defineEventHandler(async (event) => {
  //handle get data
  const { name } = getQuery(event)

  //handle post data
  const { age } = await readBody(event)

  //api call with private key
  // not we use '$fetch' instead of useFetch. 'useFetch' makes it simpler to use on the front
  // when using server routes use '$fetch'
  // const { data } = await $fetch(
  //   "https://api.currencyapi.com/v3/latest?apikey=cur_live_O7aqsRfijkO34E3RE8ans0Nn5OeesQ2c5XjwAJTJ"
  // )

  return {
    message: `Hello, ${name}! You are ${age} years old.`,
  }

  //return data
})
