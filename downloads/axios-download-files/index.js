'use strict'

const Fs = require('fs')
const Path = require('path')
const Listr = require('listr')
const Axios = require('axios')

/**
 * Start tasks to prepare or destroy data in MongoDB
 *
 * @param  {Listr} tasks  Listr instance with tasks
 * @return {void}
 */
function kickoff (tasks) {
  tasks
    .run()
    .then(process.exit)
    .catch(process.exit)
}

/**
 * Entry point for the NPM "pumpitup" and "cleanup" scripts
 * Imports movie and TV show sample data to MongoDB
 */
if (process.argv) {
  const tasks = [
    {
      title: 'Downloading images with axios',
      task: async () => {
        const url = 'https://unsplash.com/photos/AaEQmoufHLk/download?force=true'
        const path = Path.resolve(__dirname, 'images', 'code.jpg')
        const writer = Fs.createWriteStream(path)

        const response = await Axios({
          url,
          method: 'GET',
          responseType: 'stream'
        })

        response.data.pipe(writer)

        return new Promise((resolve, reject) => {
          writer.on('finish', resolve)
          writer.on('error', reject)
        })
      }
    }
  ]

  kickoff(new Listr(tasks))
}
