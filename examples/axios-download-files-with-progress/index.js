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
    responseType: 'stream',
    onDownloadProgress: function (progressEvent) {
      console.log(progressEvent);
    }
  })

  response.data.pipe(Fs.createWriteStream(path))

  const progressBar = new ProgressBar('-> downloading [:bar] :percent :etas', {
    complete: '=',
    incomplete: ' ',
    width: 40,
    total: 0
  })

  // return a promise and resolve when download finishes
  return new Promise((resolve, reject) => {
    response.data.on('data', function (chunk) {
      const total = this.headers['content-length']
      progressBar.total = parseInt(total)
      progressBar.tick(chunk.length)
    })

    response.data.on('end', resolve)
    response.data.on('error', reject)
  })
  .then(process.exit)
  .catch(process.exit)
}

download()
