'use strict'

const Stringifier = require('./async-stringify-transform')

console.log('Just type what you want!')

process.stdin
  .pipe(new Stringifier())
  .pipe(process.stdout)
