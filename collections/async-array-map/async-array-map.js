'use strict'

const Axios = require('axios')

async function map (array, callback) {
  return Promise.all(array.map(callback))
}

async function githubDetailsFor (repo) {
  const response = await Axios({
    method: 'GET',
    url: repo.url,
    headers: { Accept: 'application/vnd.github.v3+json' }
  })

  return Object.assign(repo, {
    name: response.data.full_name,
    description: response.data.description
  })
}

async function run () {
  const repos = [
    { url: 'https://api.github.com/repos/futurestudio/futureflix-starter-kit' },
    { url: 'https://api.github.com/repos/futurestudio/android-tutorials-glide' }
  ]

  console.log(
    await map(repos, async (repo) => {
      return githubDetailsFor(repo)
    })
  )
}

run()
