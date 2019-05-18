'use strict'

const Youch = require('youch')
const forTerminal = require('youch-terminal')

process.on('unhandledRejection', async (error) => {
  const output = await new Youch(error).toJSON()
  console.log(forTerminal(output))
  process.exit(1)
})

async function start () {
  return Promise.reject(
    new Error('Missing coffee exception')
  )
}

start()
