'use strict'

/**
 * Asynchrounous version of Array#forEach(). It runs the given
 * `callback` function on each `array` item. The callback
 * receives the current array item as a parameter.
 *
 * @param {Array} array
 * @param {Function} callback
 */
async function forEach (array, callback) {
  await Promise.all(array.map(callback))
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

  console.log('Fetching data ->')
  await forEach(timeouts, async timeout => {
    console.log(
      `took ${await wait(timeout)} ms`
    )
  })
}

run()
