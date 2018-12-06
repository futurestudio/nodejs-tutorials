'use strict'

const _ = require('lodash')

const first = [1, 2, 3, 4]
const second = ['A', 'B', 'C', 'D']

const vanilla1 = Array.prototype.concat(
  ...first.map((item, index) => {
    return [item, second[index]]
  })
)

console.log(vanilla1)

const vanilla2 =
  first
    .map((item, index) => {
      return [item, second[index]]
    })
    .reduce((result, pair) => {
      return result.concat(pair)
    })
console.log(vanilla2)

const lodash1 = _.flatten(_.zip(first, second))

console.log(lodash1)

const lodash2 =
  _
    .zip(first, second)
    .reduce((result, pair) => {
      return result.concat(pair)
    })
console.log(lodash2)
