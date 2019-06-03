'use strict'

const Lab = require('@hapi/lab')
const { expect } = require('@hapi/code')
const Stack = require('../../data-structures/implementations/stack/stack')

const { describe, it } = (exports.lab = Lab.script())

describe('Stack', () => {
  it('.push()', async () => {
    const stack = new Stack(1, 2)
    stack.push(3)
    expect(stack.size()).to.equal(3)

    stack.push(4, 5)
    expect(stack.size()).to.equal(5)
    expect(stack.peek()).to.equal(5)
  })

  it('.pop()', async () => {
    const stack = new Stack(1)
    expect(stack.pop()).to.equal(1)
    expect(stack.size()).to.equal(0)
    expect(stack.pop()).to.be.undefined()
  })

  it('.peek()', async () => {
    const stack = new Stack(1, 2, 3)
    const item = stack.peek()
    expect(item).to.equal(3)
    expect(stack.size()).to.equal(3)
  })

  it('.size()', async () => {
    const stack = new Stack(1, 2)
    expect(stack.size()).to.equal(2)
  })

  it('.isEmpty()', async () => {
    const stack = new Stack(1)
    expect(stack.isEmpty()).to.be.false()

    stack.pop()
    expect(stack.isEmpty()).to.be.true()
  })

  it('.clear()', async () => {
    const stack = new Stack(1)
    expect(stack.isEmpty()).to.be.false()

    stack.clear()
    expect(stack.isEmpty()).to.be.true()
  })
})
