'use strict'

const Fs = require('fs')
const Path = require('path')

function lastUpdatedDate (file) {
  const { ctime, mtime } = Fs.statSync(file)
  console.log(`File data   last modified: ${mtime}`)
  console.log(`File status last modified: ${ctime}`)

  return mtime
}

const file = Path.resolve(__dirname, 'content.txt')

lastUpdatedDate(file)
