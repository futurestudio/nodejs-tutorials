'use strict'

function compact (array) {
  array = Array.isArray(array) ? array : [ array ]

  return array.filter(item => !!item)
}

async function run () {
  const values = [ 0, null, undefined, 1, false, 2, '', 3, NaN ]

  console.log(
    await compact(values)
  )
}

run()
