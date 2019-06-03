'use strict'

const Hoek = require('@hapi/hoek')

run()

async function run () {
  const timeouts = [10, 600, 200, 775, 125, 990]
  const promises = timeouts.map(timeout => asyncProcessing(timeout))

  try {
    const result = await Promise.all(
      promises.concat([ throwUp() ])
    )

    /**
     * The control flow is not what you expect if one of the promises
     * within Promise.all rejects. If at least a single promise
     * rejects, you won't see the result logged to the console.
     */
    console.log('Here is the result:')
    console.log(result)
  } catch (error) {
    console.log('WAT WAT WAT ?! Here’s an error. Holy moly!!')

    console.log(error)
  }

  console.log()
  console.log('YES! All done.')
}

async function throwUp () {
  throw new Error('throwing up')
}

async function asyncProcessing (timeout) {
  await Hoek.wait(timeout)
  console.log(`waited: ${timeout}ms`)
}
