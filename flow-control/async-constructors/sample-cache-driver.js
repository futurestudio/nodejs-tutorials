'use strict'

class CacheDriver {
  constructor (options) {
    this.options = options
  }

  async start () {}
  async stop () {}

  async get () {}
  async forget () {}
  async remember () {}
}

module.exports = CacheDriver
