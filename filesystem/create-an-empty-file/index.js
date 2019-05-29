'use strict'

const Fs = require('fs-extra')

run()

async function run () {
  touchSync('./touched.sync')
  console.log('created "touched.sync"')

  await touch('./async.touch')
  console.log('created "async.touch"')
}

/**
 * Creates an empty file at `path`. This method does not ensure to create
 * missing directories along the path. It won’t override an existing
 * file or modify the content. Use the "w" flag to override an
 * existing file and its content.
 *
 * @param {String} path
 *
 */
function touchSync (path) {
  Fs.closeSync(Fs.openSync(path, 'a'))
}

/**
 * Ensures that the file at `path` exists. It will also create
 * missing directories along the path. If a file at `path`
 * already exists, it won’t modify the content.
 *
 * @param {String} path
 */
async function touch (path) {
  await Fs.ensureFile(path)
}
