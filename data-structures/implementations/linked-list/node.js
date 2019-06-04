'use strict'

class Node {
  constructor (value, next) {
    this.value = value
    this.next = next
  }

  getValue () {
    return this.value
  }

  getNext () {
    return this.next
  }

  setNext (next) {
    this.next = next
  }

  hasNext () {
    return !!this.next
  }
}

module.exports = Node
