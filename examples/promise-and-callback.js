'use strict'

const fs = require('fs')

function readPackage (callback) {
  // no default values in JS yet
  // make sure callback is initialized
  callback = callback || function () {}

  return new Promise(function (resolve, reject) {
    fs.readFile('./../package.json', function (err, data) {
      if (err) {
        // reject as promise
        reject(err)
        // return callback using "error-first-pattern"
        return callback(err)
      }

      resolve(data)
      return callback(null, data)
    })
  })
}

module.exports = readPackage