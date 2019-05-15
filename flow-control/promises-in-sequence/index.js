'use strict'

async function waitingTask (time) {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log(`finished: ${time}`)
      resolve(time)
    }, time)
  })
}

async function runInSequence (promises) {
  return promises.reduce(async (chain, timeout) => {
    return [ ...(await chain), await waitingTask(timeout) ]
  }, Promise.resolve([]))
}

const waitingTimes = [10, 600, 200, 775, 125, 990]

runInSequence(waitingTimes).then(result => {
  console.log()
  console.log('YES! All done. Here is the result:')
  console.log(result)
})
