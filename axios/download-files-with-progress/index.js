'use strict'

const Fs = require('fs')
const Path = require('path')
const Axios = require('axios')
const ProgressBar = require('progress')

class DownloadWithProgressBar {
  constructor () {
    this.source = 'https://unsplash.com/photos/P6uF0I_okfk/download?force=true'
    this.destination = Path.resolve(`${__dirname}/images/hills.jpg`)
  }

  async start () {
    console.log('Connecting …')
    const { data, headers } = await this.startDownload()

    console.log('Starting download')
    const progressBar = this.initializeProgressBar({ totalLength: headers['content-length'] })

    return new Promise((resolve, reject) => {
      const file = this.toFile()
      file.on('error', reject)
      file.on('finish', resolve)

      data.pipe(file)
      data.on('data', (chunk) => progressBar.tick(chunk.length))
    })
  }

  async startDownload () {
    return Axios({
      method: 'GET',
      url: this.source,
      responseType: 'stream'
    })
  }

  initializeProgressBar ({ totalLength }) {
    return new ProgressBar('-> downloading [:bar] :percent :etas', {
      width: 40,
      complete: '=',
      incomplete: ' ',
      renderThrottle: 1,
      total: parseInt(totalLength)
    })
  }

  toFile () {
    return Fs.createWriteStream(this.destination)
  }
}

const download = new DownloadWithProgressBar()
download.start()
