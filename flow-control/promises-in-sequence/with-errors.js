'use strict'

const Hoek = require('@hapi/hoek')

run()

async function run () {
  const timeouts = [10, 600, 200, 775, throwUp, 125, 990]
  const result = await reduceInSequence(timeouts)

  console.log()
  console.log('YES! All done. Here is the result:')
  console.log(result)
}

async function throwUp () {
  throw new Error('throwing up')
}

async function reduceInSequence (timeouts) {
  return timeouts.reduce(async (carry, timeout) => {
    return [
      ...(await carry),
      await asyncProcessing(timeout)
    ]
  }, Promise.resolve([]))
}

async function asyncProcessing (ms) {
  if (typeof ms === 'function') {
    return ms()
  }

  await Hoek.wait(ms)
  console.log(`finished: ${ms}ms`)
}
