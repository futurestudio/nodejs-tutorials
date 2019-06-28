'use strict'

const Listr = require('listr')
const Axios = require('axios')

let result = null

async function kickoff (tasks) {
  try {
    await tasks.run()

    console.log(result)
  } catch (error) {
    console.error(error)
  }

  process.exit(0)
}

if (process.argv) {
  const tasks = [
    {
      title: 'Downloading repository information',
      task: async () => {
        const repos = [
          {
            url: 'https://api.github.com/repos/futurestudio/futureflix-starter-kit'
          },
          {
            url: 'https://api.github.com/repos/futurestudio/android-tutorials-glide'
          }
        ]

        const promises = repos.map(async repo => {
          const response = await Axios({
            method: 'GET',
            url: repo.url,
            headers: { Accept: 'application/vnd.github.v3+json' }
          })

          return Object.assign(repo, {
            name: response.data.full_name,
            description: response.data.description
          })
        })

        result = await Promise.all(promises)
      }
    }
  ]

  kickoff(new Listr(tasks))
}
