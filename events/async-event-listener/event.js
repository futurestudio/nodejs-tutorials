'use strict'

const { EventEmitter } = require('events')

class Clock extends EventEmitter {
  constructor () {
    super()

    this.timer = null
    this.ticks = null
  }

  start () {
    if (!this.timer) {
      this.timer = setInterval(() => this.tick(), 1000)
    }

    this.emit('start', { startsAt: new Date() })
  }

  stop () {
    clearInterval(this.timer)
    this.timer = null
    this.emit('stop', { endsAt: new Date() })
  }

  tick () {
    this.ticks++
    this.emit('tick', { now: new Date(), tick: this.ticks })

    if (this.ticks > 9) {
      this.stop()
    }
  }
}

module.exports = Clock
