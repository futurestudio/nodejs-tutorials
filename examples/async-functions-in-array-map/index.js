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
      title: 'Downloading repository information',
      task: async (ctx, task) => {
        // an array of images with a name and the related download URL
        const repos = [
          {
            url: 'https://api.github.com/repos/fs-opensource/futureflix-starter-kit'
          },
          {
            url: 'https://api.github.com/repos/fs-opensource/android-tutorials-glide'
          }
        ]

        // map through the image list
        const promises = repos.map(async repo => {
          // async image download within the .map function
          const response = await Axios({
            method: 'GET',
            url: repo.url,
            headers: {
              Accept: 'application/vnd.github.v3+json'
            }
          })

          return Object.assign(repo, {
            name: response.data.full_name,
            description: response.data.description
          })
        })

        // run and wait until all promises resolve
        const results = await Promise.all(promises)
        // use the results
    }
  ]

  kickoff(new Listr(tasks))
}
