'use strict'

const Fs = require('fs')

function lastUpdatedDate() {
  const { ctime, mtime } = Fs.statSync('./content.txt')
  console.log(`File data   last modified: ${mtime}`);
  console.log(`File status last modified: ${ctime}`);
}

lastUpdatedDate()
