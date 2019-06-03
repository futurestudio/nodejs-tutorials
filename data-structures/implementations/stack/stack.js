'use strict'

class Stack {
  /**
   * Creates a new Stack instance and
   * pushes the given `items` onto
   * the stack.
   *
   * @param  {Mixed} items
   */
  constructor (...items) {
    this._stack = [...items.reverse()]
  }

  /**
   * Push new `items` onto the stack.
   *
   * @param  {Mixed} items
   */
  push (...items) {
    this._stack.unshift(...items.reverse())
  }

  /**
   * Removes and returns the most-recently added
   * item from the stack. Returns `undefined`
   * if the stack is empty.
   *
   * @returns {Mixed}
   */
  pop () {
    return this._stack.shift()
  }

  /**
   * Returns the most-recently added item from
   * the stack. This method won’t remove the
   * returned item. Returns `undefined`
   * if the stack is empty.
   *
   * @returns {Mixed}
   */
  peek () {
    return this._stack[0]
  }

  /**
   * Returns the number of items on the stack.
   *
   * @returns {Integer}
   */
  size () {
    return this._stack.length
  }

  /**
   * Returns `true` if there are no items on
   * the stack, `false` otherwise.
   *
   * @returns {Boolean}
   */
  isEmpty () {
    return this.size() === 0
  }

  /**
   * Removes all items from the stack.
   */
  clear () {
    this._stack = []
  }
}

module.exports = Stack
