'use strict'

const Fs = require('fs')
const Path = require('path')
const Listr = require('listr')
const Axios = require('axios')

function kickoff(tasks) {
  tasks
    .run()
    .then(process.exit)
    .catch(process.exit)
}

if (process.argv) {
  const tasks = [
    {
      title: 'Downloading repository information',
      task: async (ctx, task) => {
        // load repository details for this array of repo URLs
        const repos = [
          {
            url: 'https://api.github.com/repos/fs-opensource/futureflix-starter-kit'
          },
          {
            url: 'https://api.github.com/repos/fs-opensource/android-tutorials-glide'
          }
        ]

        // map through the repo list
        const promises = repos.map(async repo => {
          // request details from GitHub’s API with Axios
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

        // wait until all promises resolve
        const results = await Promise.all(promises)
        // use the results
    }
  ]

  kickoff(new Listr(tasks))
}
