'use strict'

const Path = require('path')
const Fs = require('fs-extra')

const file = Path.resolve(__dirname, 'content.txt')

async function dataToFile (data) {
  const json = JSON.stringify(data, null, 2)

  try {
    await Fs.writeFile(file, json)
    console.log('Saved data to file.')
  } catch (error) {
    console.error(error)
  }
}

async function dataFromFile () {
  try {
    const content = await Fs.readFile(file, 'utf8')
    console.log(content)
  } catch (error) {
    console.log(error)
  }
}

dataToFile({ name: 'promisified Marcus' })
dataFromFile()
