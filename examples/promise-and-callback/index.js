'use strict'

const packageInfo = require('./promise-and-callback.js').packageInfo
const packageInfoPromisified = require('./promise-and-callback.js').packageInfoPromisified

packageInfo()
  .then(data => {
    console.log('promise finished')
    console.log(data.toString())
  })
  .catch(err => {
    console.log(err.message)
  })

packageInfo((err, data) => {
  console.log('callback available')
  if (err) {
    throw err
  }

  if (data) console.log(data.toString())
})

packageInfoPromisified()
  .then(data => {
    console.log('promisified version of package info read finished')
    console.log(data.toString())
  })
  .catch(err => {
    console.log(err.message)
  })
