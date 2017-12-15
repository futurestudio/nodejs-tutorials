'use strict'

const example = require('./examples/promise-and-callback/promise-and-callback.js')

example().then(function(data) {
  console.log('promise finished')
  console.log(data.toString())
})

example(function(err, data) {
  console.log('callback available')
  if (err) {
    throw err
  }

  console.log(data.toString())
})
