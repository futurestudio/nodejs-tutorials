'use strict'

const Fs = require('fs')
const Path = require('path')

const filePath = Path.resolve(__dirname, 'content.txt')

function writeToFile (path, data) {
  const json = JSON.stringify(data, null, 2)

  Fs.writeFile(path, json, (err) => {
    if (err) {
      console.error(err)
      throw err
    }

    console.log('Saved data to file.')
  })
}

function readFromFile (path) {
  Fs.readFile(path, 'utf8', (err, json) => {
    if (err) {
      console.error(err)
      throw err
    }

    const data = JSON.parse(json)
    console.log(data)
  })
}

writeToFile(filePath, { name: 'Marcus' })
readFromFile(filePath)
