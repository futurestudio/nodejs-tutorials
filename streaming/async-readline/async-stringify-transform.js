'use strict'

const Hoek = require('hoek')
const { Transform } = require('stream')

class Stringifier extends Transform {
  async _transform (chunk, _, next) {
    const transformed = await this._process(chunk.toString().trim())

    next(null, transformed)
  }

  async _process (message) {
    console.log(`\nStart processing #${message}`)
    await Hoek.wait(2000)

    return JSON.stringify({ message }).concat('\n')
  }
}

module.exports = Stringifier
