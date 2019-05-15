'use strict'

async function waitingTask (time) {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log(`waited: ${time}ms`)
      resolve(time)
    }, time)
  })
}

async function run () {
  const waitingTimes = [10, 600, 200, 775, 125, 990].map(time => waitingTask(time))

  await Promise.all(waitingTimes)

  console.log()
  console.log('YES! All done. Here is the result:')
}

run()
