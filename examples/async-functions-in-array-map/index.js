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
        // an array of images with a name and the related download URL
        const images = [
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

        // map through the image list
        const promises = images.map(async image => {
          image.path = Path.resolve(__dirname, 'images', `${image.name}.jpg`)

          // async image download within the .map function
          const response = await Axios({
            method: 'GET',
            url: image.url,
            responseType: 'stream'
          })

          // pipe the result stream into a file on disc
          response.data.pipe(Fs.createWriteStream(image.path))

          // return a promise as the result of .map on this item
          return new Promise(resolve => {
            response.data.on('end', () => {
              // you could also save the changed item to DB
              resolve(image)
            })
          })
        })

        // run and wait until all promises resolve
        const result = await Promise.all(promises)
        // use the result
      }
    }
  ]

  kickoff(new Listr(tasks))
}
