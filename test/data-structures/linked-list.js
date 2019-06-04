'use strict'

const Lab = require('@hapi/lab')
const { expect } = require('@hapi/code')
const LinkedList = require('../../data-structures/implementations/linked-list/linked-list')

const { describe, it } = (exports.lab = Lab.script())

describe('LinkedList', () => {
  it('.addToHead()', async () => {
    const list = new LinkedList()
    list.addToHead(1).addToHead(2)
    expect(list.size()).to.equal(2)
    expect(list.toArray()).to.equal([ 2, 1 ])
  })

  it('.addBefore()', async () => {
    const list = new LinkedList()
    list.addToHead(2).addToTail(4).addBefore(2, 1).addBefore(4, 3)
    expect(list.size()).to.equal(4)
    expect(list.toArray()).to.equal([ 1, 2, 3, 4 ])

    try {
      list.addBefore(10, 2)
      expect(true).to.be.false() // this should not be reached
    } catch (error) {
      expect(error).to.exist()
    }
  })

  it('.addAfter()', async () => {
    const list = new LinkedList()
    list.addToHead(1).addToTail(2).addToTail(4)
    list.addAfter(2, 3)
    expect(list.size()).to.equal(4)
    expect(list.toArray()).to.equal([ 1, 2, 3, 4 ])

    try {
      list.addAfter(10, 2)
      expect(true).to.be.false() // this should not be reached
    } catch (error) {
      expect(error).to.exist()
    }

    const oneTwo = new LinkedList()
    oneTwo.addToHead(1).addAfter(1, 2)

    expect(oneTwo.size()).to.equal(2)
    expect(oneTwo.toArray()).to.equal([ 1, 2 ])
  })

  it('.addToTail()', async () => {
    const list = new LinkedList()
    list.addToTail(1).addToTail(2)
    expect(list.size()).to.equal(2)
    expect(list.toArray()).to.equal([ 1, 2 ])
  })

  it('.removeHead()', async () => {
    const list = new LinkedList()
    list.removeHead().addToHead(1).addToTail(2).addToTail(3)
    list.removeHead()
    expect(list.size()).to.equal(2)
    expect(list.has(1)).to.be.false()
    expect(list.has(2)).to.be.true()
    expect(list.has(3)).to.be.true()
  })

  it('.removeTail()', async () => {
    const list = new LinkedList()
    list.removeTail().addToHead(1).addToTail(2).addToTail(3)
    list.removeTail()

    expect(list.size()).to.equal(2)
    expect(list.has(1)).to.be.true()
    expect(list.has(2)).to.be.true()
    expect(list.has(3)).to.be.false()

    const head = new LinkedList().addToHead(1)
    head.removeTail()
    expect(head.isEmpty()).to.be.true()
  })

  it('.remove()', async () => {
    const list = new LinkedList()
    list.remove(1).addToHead(1).addToTail(2).addToTail(3)
    list.remove(2)
    expect(list.size()).to.equal(2)
    expect(list.toArray()).to.equal([ 1, 3 ])

    list.remove(1)
    expect(list.toArray()).to.equal([ 3 ])

    try {
      list.remove(10, 2)
      expect(true).to.be.false() // this should not be reached
    } catch (error) {
      expect(error).to.exist()
    }
  })

  it('.has()', async () => {
    const list = new LinkedList()
    list.addToHead(1).addToTail(1)
    expect(list.has(1)).to.be.true()
    expect(list.has(20)).to.be.false()
  })

  it('.traverse()', async () => {
    let sum = 0
    const list = new LinkedList()
    list.addToTail(1).addToTail(2).addToTail(3)
    list.traverse((num) => {
      sum = num + sum
    })
    expect(sum).to.equal(6)
  })

  it('.toArray()', async () => {
    const list = new LinkedList()
    list.addToHead(1).addToTail(2).addToTail(3)
    expect(list.toArray()).to.equal([ 1, 2, 3 ])
  })

  it('.size()', async () => {
    const list = new LinkedList()
    list.addToHead(1).addToHead(2)
    expect(list.size()).to.equal(2)
  })

  it('.isEmpty()', async () => {
    const list = new LinkedList()
    list.addToHead(1)
    expect(list.isEmpty()).to.be.false()

    list.removeHead()
    expect(list.isEmpty()).to.be.true()
  })

  it('.clear()', async () => {
    const list = new LinkedList()
    list.addToHead(1)
    expect(list.isEmpty()).to.be.false()

    list.clear()
    expect(list.isEmpty()).to.be.true()
  })
})
