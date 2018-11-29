'use strict'

const first = [1, 2, 3, 4]
const second = ['A', 'B', 'C', 'D']

const combined =
  first
    .map((item, index) => {
      return [item, second[index]]
    }).reduce((result, pair) => {
      return result.concat(pair)
    })

console.log('Vanilla JS:')
console.log(combined);
// -> [ 1, 'A', 2, 'B', 3, 'C', 4, 'D' ]


// Alternatively with lodash
const _ = require('lodash')

const lodashCombined =
  _
    .zip(first, second)
    .reduce((result, pair) => {
      return result.concat(pair)
    })

console.log('with lodash:')
console.log(lodashCombined);
// -> [ 1, 'A', 2, 'B', 3, 'C', 4, 'D' ]
