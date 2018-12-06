'use strict'

const Fs = require('fs')
const Path = require('path')
const Axios = require('axios')
const ProgressBar = require('progress')

async function download() {
  const url = 'https://unsplash.com/photos/P6uF0I_okfk/download?force=true'
  const path = Path.resolve(__dirname, 'images', 'hills.jpg')

  const response = await Axios({
    url,
    method: 'GET',
    responseType: 'stream'
  })

  response.data.pipe(Fs.createWriteStream(path))

  const progressBar = new ProgressBar('-> downloading [:bar] :percent :etas', {
    width: 40,
    complete: '=',
    incomplete: ' ',
    renderThrottle: 1,
    total: parseInt(response.headers['content-length'])
  })

  return new Promise((resolve, reject) => {
    response.data.on('data', (chunk) => progressBar.tick(chunk.length))
    response.data.on('end', resolve)
    response.data.on('error', reject)
  })
}

download()
