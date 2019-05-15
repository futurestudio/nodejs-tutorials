'use strict'

const Path = require('path')
const Fs = require('fs-extra')

const filePath = Path.resolve(__dirname, 'content.txt')

async function writeToFile (path, data) {
  const json = JSON.stringify(data, null, 2)

  try {
    await Fs.writeFile(path, json)
    console.log('Saved data to file.')
  } catch (error) {
    console.error(error)
  }
}

async function dataFromFile (path) {
  try {
    const json = await Fs.readFile(path, 'utf8')
    const content = JSON.parse(json)
    console.log(content)
  } catch (error) {
    console.log(error)
  }
}

writeToFile(filePath, { name: 'promisified Marcus' })
dataFromFile(filePath)
