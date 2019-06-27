'use strict'

/**
 * Removes all falsey values from the given `array`.
 * Falsey values are `null`, `undefined`, `''`,
 * `false`, `0`, `NaN`.
 *
 * @param {Array} array
 *
 * @returns {Array}
 */
function compact (array) {
  array = Array.isArray(array) ? array : [ array ]

  return array.filter(item => !!item)
}

function run () {
  const values = [ 0, null, undefined, 1, false, 2, '', 3, NaN ]

  console.log(
    compact(values)
  )
}

run()
