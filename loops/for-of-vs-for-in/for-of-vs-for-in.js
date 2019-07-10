'use strict'

const types = [ 'object', 'array', 'string', 'integer', 'float', 'boolean' ]

/**
 * Use `for … of` to iterate through the values of an iterable.
 * Use for-of on arrays to access the values. Notice that an
 * object is not an iterable, but a Map is.
 */
for (const type of types) {
  console.log(`A JavaScript type is: ${type}`)
}

const cache = new Map()
cache.set('posts:1', { id: 1, title: 'Post 1' })
cache.set('posts:2', { id: 2, title: 'Post 2' })

for (const item of cache.values()) {
  console.log(`Cache item: ${JSON.stringify(item)}`)
}

/**
 * When iterating through a Map, you’ll receive each item as an array
 * with two entries. The first entry in the array is the key and
 * the second entry is the related value. The following example
 * uses destructuring to assign the properties.
 */
for (const [ key, value ] of cache) {
  console.log(`Cache item: "${key}" with values ${JSON.stringify(value)}`)
}

/**
 * Use `for … in` to iterate through the keys of an iterable.
 * Using for-in on an object will return the properties.
 * On arrays, for-in returns the item’s index.
 */
const user = { name: 'Marcus', likes: 'Node.js' }

for (const key in user) {
  console.log(`${key}: ${user[key]}`)
}

const names = [ 'Marcus', 'Norman', 'Christian' ]

for (const index in names) {
  console.log(`${names[index]} is at position ${index}`)
}
