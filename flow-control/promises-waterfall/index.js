'use strict'

const Path = require('path')
const Fs = require('fs-extra')

saveIt()

async function saveIt () {
  const content = await downloadContent()
  const file = await saveToFile(content)
  const { size } = await Fs.stat(file)

  console.log(`File content is HUGE: ${(size / 1000).toFixed(2)} KB`)
}
async function downloadContent () {
  return JSON.stringify([
    { id: 1, description: 'huge JSON content' },
    { id: 2, description: 'more more more!' },
    { id: 3, description: 'you rock buddy!' }
  ])
}

async function saveToFile (content) {
  const file = Path.resolve(__dirname, 'data.json')
  await Fs.writeFile(file, content)

  return file
}
