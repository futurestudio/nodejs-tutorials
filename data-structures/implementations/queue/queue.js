'use strict'

class Queue {
  constructor (...items) {
    this._queue = [...items]
  }

  enqueue (...items) {
    this._queue.push(...items)
  }

  dequeue () {
    return this._queue.shift()
  }

  peek () {
    return this._queue[0]
  }

  size () {
    return this._queue.length
  }

  isEmpty () {
    return this.size() === 0
  }

  clear () {
    this._queue = []
  }
}

module.exports = Queue
