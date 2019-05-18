'use strict'

const SampleDriver = require('./sample-cache-driver')

class Cache {
  constructor (options) {
    this.options = options
    this.driver = new SampleDriver()

    /**
     * Node.js doesn’t support async constructors.
     * You can’t await driver.start() here.
     * Instead, use an async method to run the initialization.
     */
  }

  async init () {
    await this.driver.start()
  }

  static async init (options) {
    return new this(options).init()

    // the caller can do something like this:
    //   const cache = await Cache.init({ options })
    // or
    //  const cache = await new Cache({options}).init()
  }
}

module.exports = Cache
