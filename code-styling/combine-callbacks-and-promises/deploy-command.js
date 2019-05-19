'use strict'

const BaseCommand = require('./base-command')

class Deploy extends BaseCommand {
  async handle () {
    /**
     * Combine async/await with callbacks: the base command
     * implements a `run` method that accepts an async
     * callback as a parameter.
     *
     * This async callback method will then be processed
     * within `run`. Additionally, `run` implements
     * basic handling, like pretty error logging.
     */
    await this.run(async () => {
      await this._deploy()
    })
  }

  async _deploy () {
    // do the heavy lifting here
  }
}

module.exports = Deploy
