'use strict'

const Fs = require('fs')

function createdDate() {
  const { birthtime } = Fs.statSync('./content.txt')
  console.log(birthtime);
}

createdDate()
