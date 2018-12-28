'use strict'

const Fs = require('fs')
const Path = require('path')

const file = Path.resolve(__dirname, 'content.txt')

function dataToFile (data) {
  const json = JSON.stringify(data, null, 2)

  Fs.writeFile(file, json, (err) => {
    if (err) {
      console.error(err)
      throw err
    }

    console.log('Saved data to file.')
  })
}

function dataFromFile () {
  Fs.readFile(file, 'utf8', (err, data) => {
    if (err) {
      return console.error(err)
    }

    console.log(data)
  })
}

dataToFile({ name: 'Marcus' })
dataFromFile()
