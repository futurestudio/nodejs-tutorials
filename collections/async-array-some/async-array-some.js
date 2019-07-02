'use strict'

/**
 * Asynchronous version of `Array#some()`. The function
 * tests whether at least one element in the `array`
 * passes the check implemented by the `callback`.
 *
 * @param {Array} array
 * @param {Function} callback
 *
 * @returns {Boolean}
 */
async function some (array, callback) {
  array = Array.isArray(array) ? array : [ array ]

  const values = await Promise.all(array.map(callback))

  return values.some(value => !!value)
}

/**
 * Helper function that waits for the given number of `ms`.
 *
 * @param {Integer} ms
 *
 * @returns {Integer}
 */
async function wait (ms) {
  await new Promise(resolve => setTimeout(resolve, ms))

  return ms
}

async function run () {
  const timeouts = [10, 600, 200, 775, 125, 990]

  console.log('Are some waiting times greater than 500? ->')
  console.log(
    await some(timeouts, async timeout => {
      return await wait(timeout) > 500
    })

  )

  console.log('\nAre some waiting times lower then 10? ->')
  console.log(
    await some(timeouts, async timeout => {
      return await wait(timeout) < 10
    })
  )
}

run()
