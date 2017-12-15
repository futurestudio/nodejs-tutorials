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
      task: (ctx, task) => {
        const movies = [
          {
            name: 'balloons',
            url: 'https://unsplash.com/photos/YhdEgF-qWlI/download?force=true'
          },
          {
            name: 'rocket-start',
            url: 'https://unsplash.com/photos/TV2gg2kZD1o/download?force=true'
          },
          {
            name: 'mountains',
            url: 'https://unsplash.com/photos/VNseEaTt9w4/download?force=true'
          },
          {
            name: 'winter-road',
            url: 'https://unsplash.com/photos/jIdKrtJF8Uk/download?force=true'
          },
          {
            name: 'spring-incoming',
            url: 'https://unsplash.com/photos/ngu4VY2hI48/download?force=true'
          }
        ]

        const promises = movies.map(async movie => {
          const imagePath = Path.resolve(__dirname, 'images', `${movie.name}.jpg`)
          const response = await Axios({
            method: 'GET',
            url: movie.url,
            responseType: 'stream'
          })

          response.data.pipe(Fs.createWriteStream(imagePath))

          return new Promise(resolve => {
            response.data.on('end', resolve)
          })
        })

        return Promise.all(promises)
      }
    }
  ]

  kickoff(new Listr(tasks))
}
