'use strict'

const Event = require('./event')
const Listener = require('./listener')

const delivery = new Event()
const handler = new Listener()

delivery.on('start', async (...args) => {
  await handler.onStart(...args)
})

delivery.on('stop', async (...args) => {
  await handler.onStop(...args)
})

delivery.on('tick', async (...args) => {
  await handler.onTick(...args)
})

delivery.start()
