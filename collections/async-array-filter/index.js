'use strict'

async function filter (array, callback) {
  array = Array.isArray(array) ? array : [ ...array ]

  const values = await Promise.all(array.map(callback))

  return array.filter((_, index) => values[index])
}

async function wait (ms) {
  await new Promise(resolve => setTimeout(resolve, ms))

  return ms
}

async function run () {
  const timeouts = [10, 600, 200, 775, 125, 990]

  console.log(
    await filter(timeouts, async timeout => {
      return await wait(timeout) > 500
    })
  )
}

run()
