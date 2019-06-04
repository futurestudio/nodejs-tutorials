'use strict'

const Node = require('./node')

class LinkedList {
  constructor () {
    this._head = null
  }

  addToHead (value) {
    if (this.isEmpty()) {
      this._head = new Node(value)
      return this
    }

    this._head = new Node(value, this._head)

    return this
  }

  addBefore (value, newValue) {
    if (!this.has(value)) {
      throw new Error(`Cannot insert ${newValue}: cannot find ${value}`)
    }

    let prevNode = null
    let current = this._head

    while (current) {
      if (current.getValue() === value) {
        if (prevNode) {
          prevNode.setNext(new Node(newValue, current))
        } else {
          this.addToHead(newValue)
        }

        break
      }

      prevNode = current
      current = current.getNext()
    }

    return this
  }

  addAfter (value, newValue) {
    if (!this.has(value)) {
      throw new Error(`Cannot insert ${newValue}: cannot find ${value}`)
    }

    let current = this._head

    while (current) {
      if (current.getValue() === value) {
        current.setNext(new Node(newValue, current.getNext()))
        break
      }

      current = current.getNext()
    }

    return this
  }

  addToTail (value) {
    if (this.isEmpty()) {
      this._head = new Node(value)
      return this
    }

    let current = this._head

    while (current.hasNext()) {
      current = current.getNext()
    }

    current.setNext(new Node(value))

    return this
  }

  removeHead () {
    if (this.isEmpty()) {
      return this
    }

    if (this._head.hasNext()) {
      this._head = this._head.getNext()

      return this
    }

    this._head = null

    return this
  }

  removeTail () {
    if (this.isEmpty()) {
      return this
    }

    let preLast = null
    let current = this._head

    while (current.hasNext()) {
      preLast = current
      current = current.getNext()
    }

    if (preLast) {
      preLast.setNext(null)
      return this
    }

    this.removeHead()

    return this
  }

  remove (value) {
    if (this.isEmpty()) {
      return this
    }

    if (!this.has(value)) {
      throw new Error(`Cannot find ${value} and therefore not remove it`)
    }

    let prevNode = null
    let current = this._head

    while (current) {
      if (current.getValue() === value) {
        break
      }

      prevNode = current
      current = current.getNext()
    }

    if (prevNode) {
      prevNode.setNext(current.getNext())
      return this
    }

    this.removeHead()

    return this
  }

  has (value) {
    let current = this._head

    while (current) {
      if (current.getValue() === value) {
        return true
      }

      current = current.getNext()
    }

    return false
  }

  traverse (callback) {
    let current = this._head

    while (current) {
      callback(current.getValue())
      current = current.getNext()
    }
  }

  toArray () {
    let result = []
    this.traverse(value => result.push(value))

    return result
  }

  size () {
    let size = 0

    this.traverse(() => {
      size += 1
    })

    return size
  }

  isEmpty () {
    return this.size() === 0
  }

  clear () {
    this._head = null
  }
}

module.exports = LinkedList
