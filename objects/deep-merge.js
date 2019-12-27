'use strict'

const merge = require('deepmerge')

const first = {
  name: 'Marcus',
  sub: {
    eyes: 'blue'
  }
}

const second = {
  name: 'Node.js',
  sub: {
    hair: 'brown'
  }
}

console.log(
  merge(first, second)
)
