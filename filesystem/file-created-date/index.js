'use strict'

const Fs = require('fs')
const Path = require('path')

function createdDate (file) {
  const { birthtime } = Fs.statSync(file)

  return birthtime
}

const file = Path.resolve(__dirname, 'content.txt')

console.log(
  createdDate(file)
)
