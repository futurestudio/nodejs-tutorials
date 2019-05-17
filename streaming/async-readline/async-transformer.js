'use strict'

const { Transform } = require('stream')

class MessageTransformer extends Transform {
  async _transform (chunk, _, next) {
    const transformed = await this._process(chunk)

    next(null, transformed)
  }

  async _process (chunk) {
    console.log(`Start baking “${chunk.toString().trim()}”`)
    await new Promise(resolve => setTimeout(resolve, 1000))

    return { message: chunk.toString() }
  }
}

module.exports = MessageTransformer
