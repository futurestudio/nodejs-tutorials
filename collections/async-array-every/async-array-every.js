'use strict'

/**
 * Asynchronous version of `Array#every()` testing
 * whether all elements in the `array` pass the
 * test implemented by the `callback` function.
 *
 * @param {Array} array
 * @param {Function} callback
 *
 * @returns {Boolean}
 */
async function every (array, callback) {
  array = Array.isArray(array) ? array : [ array ]

  const values = await Promise.all(array.map(callback))

  return values.every((value) => !!value)
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

  console.log('Is every waiting time greater than 500? ->')
  console.log(
    await every(timeouts, async timeout => {
      return await wait(timeout) > 500
    })

  )

  console.log('\nIs every waiting time greater than 5? ->')
  console.log(
    await every(timeouts, async timeout => {
      return await wait(timeout) > 5
    })
  )
}

run()
