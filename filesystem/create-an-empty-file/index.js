'use strict'

const Fs = require('fs-extra')

run()

async function run () {
  const descriptor = touchSync('./touched.sync')
  Fs.closeSync(descriptor)
  console.log('created "touched.sync"')

  await touch('./async.touch')
  console.log('created "async.touch"')
}

function touchSync (file) {
  return Fs.openSync(file, 'w')
}

async function touch (file) {
  await Fs.ensureFile(file)
}
