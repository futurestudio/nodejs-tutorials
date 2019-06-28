'use strict'

/**
 * Asynchronously filter the given `array` using the provided `callback`.
 * At first, this function uses an async version of Array.map to run the
 * `callback` on every item. This returns an array of boolean values,
 * like `[ true, false, true ]`. The final filter results will be
 * calculated based on the boolean results and only those items
 * having a `true` result in the boolean array will survive.
 *
 *
 * @param {Array} array
 * @param {Function} callback
 *
 * @returns {Array}
 */
async function filter (array, callback) {
  array = Array.isArray(array) ? array : [ array ]

  const values = await Promise.all(array.map(callback))

  return array.filter((_, index) => values[index])
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
    await filter(timeouts, async timeout => {
      return await wait(timeout) > 500
    })
  )
}

run()
