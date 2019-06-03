'use strict'

const Lab = require('@hapi/lab')
const { expect } = require('@hapi/code')
const Set = require('../../data-structures/implementations/set/set')

const { describe, it } = (exports.lab = Lab.script())

describe('Set', () => {
  it('.add()', async () => {
    const set = new Set(1, 2, 1)
    set.add(3)
    expect(set.size()).to.equal(3)

    set.add(4, 4, 5)
    expect(set.size()).to.equal(5)
  })

  it('.remove()', async () => {
    const set = new Set(1, 2)
    set.remove(1)
    expect(set.size()).to.equal(1)

    set.remove(1)
    expect(set.size()).to.equal(1)
  })

  it('.has()', async () => {
    const set = new Set(1, 2, 3)
    expect(set.has(2)).to.be.true()
    expect(set.has(4)).to.be.false()
  })

  it('.toArray()', async () => {
    const numbers = new Set(1, 2, 3)
    expect(numbers.toArray()).to.equal([1, 2, 3])

    const strings = new Set('Marcus', 'Norman', 'Christian')
    expect(strings.toArray()).to.equal(['Marcus', 'Norman', 'Christian'])
  })

  it('.size()', async () => {
    const set = new Set(1, 2, 1, 2)
    expect(set.size()).to.equal(2)
  })

  it('.isEmpty()', async () => {
    const set = new Set(1)
    expect(set.isEmpty()).to.be.false()

    set.remove(1)
    expect(set.isEmpty()).to.be.true()
  })

  it('.clear()', async () => {
    const set = new Set(1)
    expect(set.isEmpty()).to.be.false()

    set.clear()
    expect(set.isEmpty()).to.be.true()
  })
})
