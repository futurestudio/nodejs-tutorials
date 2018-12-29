'use strict'

const data = {
  name: 'Marcus',
  passion: 'Future Studio',
  likes: [
    {
      tag: 'Node.js',
      level: 10
    }, {
      tag: 'hapi',
      level: 10
    }
  ]
}

console.log(
  JSON.stringify(data, null, 2)
)
