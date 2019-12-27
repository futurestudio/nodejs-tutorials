'use strict'

const first = {
  name: 'Marcus',
  lovesNode: true,
  sub: {
    eyes: 'blue'
  }
}

const second = {
  name: 'Node.js',
  isDeveloper: false,
  sub: {
    hair: 'brown'
  }
}

/**
 * Object.assign merges all arguments into the first one.
 * It overrides the properties in the first arguments
 */
console.log(
  Object.assign({}, first, second)
)

console.log(
  { ...first, ...second }
)
