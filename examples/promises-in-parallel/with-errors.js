'use strict'

async function waitingTask (time) {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log(`waited: ${time}ms`)
      resolve(time)
    }, time)
  })
}

async function throwUp () {
  throw new Error('throwing up')
}

async function run () {
  const waitingTimes = [10, 600, 200, 775, 125, 990].map(time => waitingTask(time))
  const errors = [throwUp()]

  try {
    const result = await Promise.all(waitingTimes.concat(errors))

    /**
     * The control flow is not what you expect if one of the promises
     * within Promise.all rejects. If at least a single promise
     * rejects, you won't see the result logged to the console.
     */
    console.log(result)
  } catch (error) {
    console.log(error)
  }

  console.log()
  console.log('YES! All done. Here is the result:')
}

run()
