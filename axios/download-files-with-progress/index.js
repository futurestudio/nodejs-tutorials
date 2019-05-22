'use strict'

const Fs = require('fs')
const Path = require('path')
const Axios = require('axios')
const ProgressBar = require('progress')

class DownloadWithProgressBar {
  constructor () {
    this.source = 'https://unsplash.com/photos/P6uF0I_okfk/download?force=true'
    this.destination = Path.resolve(__dirname, 'images', 'hills.jpg')
  }

  async start () {
    console.log('Starting download')

    const { data, headers } = await this._downloadFile()
    const progressBar = this._initializeProgressBar({ totalLength: headers['content-length'] })

    return new Promise((resolve, reject) => {
      data.pipe(this._destinationWriteStream())

      data.on('data', (chunk) => progressBar.tick(chunk.length))
      data.on('end', resolve)
      data.on('error', reject)
    })
  }

  async _downloadFile () {
    return Axios({
      url: this.source,
      method: 'GET',
      responseType: 'stream'
    })
  }

  _initializeProgressBar ({ totalLength }) {
    return new ProgressBar('-> downloading [:bar] :percent :etas', {
      width: 40,
      complete: '=',
      incomplete: ' ',
      renderThrottle: 1,
      total: parseInt(totalLength)
    })
  }

  _destinationWriteStream () {
    return Fs.createWriteStream(this.destination)
  }
}

const download = new DownloadWithProgressBar()
download.start()
