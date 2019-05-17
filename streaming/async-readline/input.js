'use strict'

const Transformer = require('./async-transformer')

console.log('Just type what you want!')

process.stdin
  .pipe(new Transformer())
  .pipe(process.stdout)
