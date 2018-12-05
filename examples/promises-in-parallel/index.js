'use strict'

async function waitingTask(time) {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log(`finished: ${time}`)
      resolve(time)
    }, time)
  })
}

async function run() {
  const waitingTimes = [10, 600, 200, 775, 125, 990]
  const promises = waitingTimes.map(time => waitingTask(time))

  await Promise.all(promises)

  console.log();
  console.log('YES! All done. Here is the result:');
}

run()
