'use strict'

/**
 * Asynchronous version of Array#find(). Returns the first
 * item in the `array` that satisfies the `callback`
 * testing function, `undefined` otherwise .
 *
 * @param {Array} array
 * @param {Function} callback
 *
 * @returns {*} the found value
 */
async function find (array, callback) {
  const mapped = await Promise.all(array.map(callback))

  return array.find((_, i) => mapped[i])
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

  console.log(
    await find(timeouts, async timeout => {
      return await wait(timeout) > 700
    })
  )
}

run()
