'use strict'

class Listener {
  onStart () {
    console.log(`Opening DevDays Pizza House\n`)
  }

  onStop () {
    console.log(`\nDevDays Pizza is going home\n`)
  }

  async onTick ({ tick }) {
    const bakingTime = this._randomTimeout()
    console.log(`📥 #${tick} received -> delivery takes ${bakingTime} s`)

    await this._workHardBakeHard(bakingTime)

    console.log(`🍕 ${tick} delivered -> took just: ${bakingTime} s`)
  }

  async _workHardBakeHard (seconds) {
    await new Promise(resolve => {
      setTimeout(resolve, seconds * 1000)
    })
  }

  _randomTimeout () {
    return Math.floor(Math.random() * 20)
  }
}

module.exports = Listener
