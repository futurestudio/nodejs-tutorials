'use strict'

const Hoek = require('hoek')

start()

async function start () {
  const waitingTimes = [10, 600, 200, 775, throwUp, 125, 990]
  const result = await runInSequence(waitingTimes)

  console.log()
  console.log('YES! All done. Here is the result:')
  console.log(result)
}

async function throwUp () {
  throw new Error('throwing up')
}

async function runInSequence (promises) {
  return promises.reduce(async (carry, timeout) => {
    return [
      ...(await carry),
      await wait(timeout)
    ]
  }, Promise.resolve([]))
}

async function wait (timeout) {
  if (typeof timeout === 'function') {
    return timeout()
  }

  await Hoek.wait(timeout)
  console.log(`finished: ${timeout}ms`)
}
