'use strict'

const Fs = require('fs')
const Path = require('path')
const Util = require('util')
const packagePath = Path.resolve(__dirname, '..', '..', 'package.json')

exports.packageInfo = function(callback) {
  return new Promise((resolve, reject) => {
    Fs.readFile(packagePath, (err, data) => {
      if (err) {
        // if no callback available, reject the promise
        // else, return callback using "error-first-pattern"
        return callback ? callback(err) : reject(err)
      }

      return callback ? callback(null, data) : resolve(data)
    })
  })
}

exports.packageInfoPromisified = function() {
  const readFilePromise = Util.promisify(Fs.readFile)
  return readFilePromise(packagePath)
}
