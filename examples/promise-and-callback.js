'use strict'

const fs = require('fs')
const path = require('path')
const packagePath = path.resolve(__dirname, '..', 'package.json')

function packageInfo (callback) {
  // no default values in JS yet
  // make sure callback is initialized
  callback = callback || function () {}

  return new Promise(function (resolve, reject) {
    fs.readFile(packagePath, function (err, data) {
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

module.exports = packageInfo