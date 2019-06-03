'use strict'

const Lab = require('@hapi/lab')
const { expect } = require('@hapi/code')
const Queue = require('../../data-structures/implementations/priority-queue/priority-queue')

const { describe, it } = (exports.lab = Lab.script())

describe('PriorityQueue', () => {
  it('.enqueue()', async () => {
    const queue = new Queue()
    queue.enqueue(3, 3).enqueue(1, 1)
    expect(queue.size()).to.equal(2)

    queue.enqueue(4, 5)
    expect(queue.size()).to.equal(3)
    expect(queue.peek()).to.equal(1)

    try {
      queue.enqueue(1, 0)
      expect(true).to.equal(false) // this should not be reached
    } catch (error) {
      expect(error).to.exist()
    }

    try {
      queue.enqueue(1, 'priority')
      expect(true).to.equal(false) // this should not be reached
    } catch (error) {
      expect(error).to.exist()
    }
  })

  it('.dequeue()', async () => {
    const queue = new Queue()
    queue.enqueue(3, 3).enqueue(1, 1)
    expect(queue.dequeue()).to.equal(1)
    expect(queue.dequeue()).to.equal(3)
    expect(queue.dequeue()).to.be.undefined()
  })

  it('.peek()', async () => {
    const queue = new Queue()
    expect(queue.peek()).to.be.undefined()

    queue.enqueue(3, 3).enqueue(1, 1).enqueue(2, 2)
    expect(queue.peek()).to.equal(1)
    expect(queue.size()).to.equal(3)
  })

  it('.size()', async () => {
    const queue = new Queue()
    queue.enqueue(1, 1).enqueue(1, 1)
    expect(queue.size()).to.equal(2)
  })

  it('.isEmpty()', async () => {
    const queue = new Queue()
    queue.enqueue(1, 1)
    expect(queue.isEmpty()).to.be.false()

    queue.dequeue()
    expect(queue.isEmpty()).to.be.true()
  })

  it('.clear()', async () => {
    const queue = new Queue()
    queue.enqueue(1, 1)
    expect(queue.isEmpty()).to.be.false()

    queue.clear()
    expect(queue.isEmpty()).to.be.true()
  })
})
