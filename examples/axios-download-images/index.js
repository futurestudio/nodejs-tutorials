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
function kickoff(tasks) {
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
      task: async (ctx, task) => {
        const url = 'https://unsplash.com/photos/piG9Ye_oHrI/download?force=true'
        const path = Path.resolve(__dirname, 'images', 'cloudy-cabin.jpg')

        // async image download within the .map function
        const response = await Axios({
          method: 'GET',
          url: url,
          responseType: 'stream'
        })

        // pipe the result stream into a file on disc
        response.data.pipe(Fs.createWriteStream(path))

        // return a promise as the result of .map on this item
        return new Promise(resolve => {
          response.data.on('end', () => {
            resolve()
          })
        })
      }
    }
  ]

  kickoff(new Listr(tasks))
}
