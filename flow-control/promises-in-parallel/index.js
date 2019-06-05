'use strict'

const Hoek = require('@hapi/hoek')

run()

async function run () {
  const timeouts = [10, 600, 200, 775, 125, 990]

  const forResult = await forLoopInParallel(timeouts)
  console.log()

  const allResult = await awaitAll(timeouts)
  console.log()

  console.log('YES! All done. Here are the results')
  console.log(forResult)
  console.log(allResult)
}

async function forLoopInParallel (timeouts) {
  const promises = timeouts.map(timeout => asyncProcessing(timeout))
  const result = []

  for (const timeoutPromise of promises) {
    result.push(await timeoutPromise)
  }

  return result
}

async function awaitAll (timeouts) {
  const promises = timeouts.map(timeout => asyncProcessing(timeout))
  const result = await Promise.all(promises)

  return result
}

async function asyncProcessing (ms) {
  await Hoek.wait(ms)
  console.log(`waited: ${ms}ms`)

  return ms
}
