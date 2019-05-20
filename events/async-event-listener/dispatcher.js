'use strict'

const Event = require('./event')
const Listener = require('./listener')

const clock = new Event()
const handler = new Listener()

clock.on('start', async (...args) => {
  await handler.onStart(...args)
})

clock.on('stop', async (...args) => {
  await handler.onStop(...args)
})

clock.on('tick', async (...args) => {
  await handler.onTick(...args)
})

clock.start()
