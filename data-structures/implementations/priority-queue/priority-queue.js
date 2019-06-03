'use strict'

class PriorityQueue {
  /**
   * Creates a new PriorityQueue instance.
   *
   * @param  {Mixed} items
   */
  constructor () {
    this._queue = []
  }

  /**
   * Pushes a new `item` with the related
   * `priority` into the queue.
   *
   * @param  {Mixed} items
   */
  enqueue (item, priority) {
    if (Number.isNaN(+priority) || priority < 1) {
      throw new Error('Failed to enqueue item: the priority must be a positive number')
    }

    this._queue.push({ priority, item })

    this._queue.sort((a, b) => {
      return a.priority - b.priority
    })

    return this
  }

  /**
   * Removes and returns the item which is up
   * for processing. Returns `undefined`
   * if the queue is empty.
   *
   * @returns {Mixed}
   */
  dequeue () {
    if (this.isEmpty()) {
      return
    }

    const { item } = this._queue.shift()

    return item
  }

  /**
   * Returns the front item without removing it
   * from the queue. Returns `undefined` if
   * the queue is empty.
   *
   * @returns {Mixed}
   */
  peek () {
    return this._queue[0] && this._queue[0].item
  }

  /**
   * Returns the number of items in the queue.
   *
   * @returns {Integer}
   */
  size () {
    return this._queue.length
  }

  /**
   * Returns `true` if there are no items in
   * the queue, `false` otherwise.
   *
   * @returns {Boolean}
   */
  isEmpty () {
    return this.size() === 0
  }

  /**
   * Removes all items from the queue.
   */
  clear () {
    this._queue = []
  }
}

module.exports = PriorityQueue
