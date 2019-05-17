'use strict'

const { Transform } = require('stream')

class Read extends Transform {
  async _transform (chunk, _, next) {
    this.stopIfDone(chunk)

    const transformed = await this._process(chunk)

    next(null, transformed)
  }

  async _process (chunk) {
    console.log(`Start baking “${chunk.toString().trim()}”`)
    await new Promise(resolve => setTimeout(resolve, 1000))

    return `finished ${chunk.toString()}`
  }

  stopIfDone (chunk) {
    if (chunk.toString().trim() === 'done') {
      console.log('Clear the kitchen!')
      return process.exit(0)
    }
  }
}

module.exports = Read
