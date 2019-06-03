'use strict'

class Set {
  /**
   * Creates a new Set instance and
   * adds the given `items`.
   *
   * @param  {Mixed} items
   */

  constructor (...items) {
    this._set = {}
    this._size = 0

    this.add(...items)
  }

  /**
   * Adds new `items` into the set.
   *
   * @param  {Mixed} items
   */
  add (...items) {
    items.forEach(item => {
      if (!this.has(item)) {
        this._set[item] = item
        this._size += 1
      }
    })
  }

  /**
   * Removes the given `item` from the set.
   */
  remove (item) {
    if (this.has(item)) {
      this._set[item] = false
      this._size -= 1
    }
  }

  /**
   * Returns `true` if the given `item` is
   * contained in the set, `false`
   * otherwise.
   *
   * @param {Mixed} item
   *
   * @returns {Boolean}
   */
  has (item) {
    return !!this._set[item]
  }

  /**
   * Returns an array containing all the values
   * contained in the set.
   *
   * @returns {Array<Mixed>}
   */
  toArray () {
    return Object.values(this._set).map((el) => {
      return Number.isNaN(+el) ? el : +el
    })
  }

  /**
   * Returns the number of items in the set.
   *
   * @returns {Integer}
   */
  size () {
    return this._size
  }

  /**
   * Returns `true` if there are no items in
   * the set, `false` otherwise.
   *
   * @returns {Boolean}
   */
  isEmpty () {
    return this.size() === 0
  }

  /**
   * Removes all items from the set.
   */
  clear () {
    this._set = {}
    this._size = 0
  }
}

module.exports = Set
