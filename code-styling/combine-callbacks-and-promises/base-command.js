'use strict'

class Command {
  async run (callback) {
    try {
      await this.ensureInProjectRoot()
      await callback()
    } catch (error) {
      this.prettyPrintError(error)
      process.exit(1)
    }
  }

  async ensureInProjectRoot () {
    // ensure that the command execution was
    // initiated from the project’s root
  }

  async prettyPrintError (error) {
    // create a nice-looking error output
    console.error(error)
  }
}

module.exports = Command
