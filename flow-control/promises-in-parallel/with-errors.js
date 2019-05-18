'use strict'

const Hoek = require('hoek')

run()

async function run () {
  const waitingTimes = [10, 600, 200, 775, 125, 990].map(timeout => wait(timeout))

  try {
    const result = await Promise.all(
      waitingTimes.concat([ throwUp() ])
    )

    /**
     * The control flow is not what you expect if one of the promises
     * within Promise.all rejects. If at least a single promise
     * rejects, you won't see the result logged to the console.
     */
    console.log(result)
  } catch (error) {
    console.log('WAT WAT WAT ?! Here’s an error. Holy moly!!')

    console.log(error)
  }

  console.log()
  console.log('YES! All done. Here is the result:')
}

async function throwUp () {
  throw new Error('throwing up')
}

async function wait (timeout) {
  await Hoek.wait(timeout)
  console.log(`waited: ${timeout}ms`)
}
