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

console.log(combined);
// -> [ 1, 'A', 2, 'B', 3, 'C', 4, 'D' ]

