'use strict'

async function waitingTask(time) {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log(`finished: ${time}`)
      resolve(time)
    }, time)
  })
}

async function throwUp() {
  throw new Error('throwing up')
}

async function run() {
  const waitingTimes = [10, 600, 200, 775, 125, 990]
  const regular = waitingTimes.map(time => waitingTask(time))
  const errors = [throwUp()]

  await Promise.all(regular.concat(errors))

  console.log();
  console.log('YES! All done. Here is the result:');
}

run()
