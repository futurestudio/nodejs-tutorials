'use strict'

const Axios = require('axios')

/**
 * Asynchronous version of Array#map(), running all transformations
 * in sequence. It runs the given `callback` on each item of
 * the `array` and returns an array of transformed items.
 *
 * @param {Array} array
 * @param {Function} callback
 *
 * @returns {Array} resulting array of transformed items
 */
async function mapSeries (array, callback) {
  const results = []

  for (const index in array) {
    results.push(
      await callback(array[index], index, array)
    )
  }

  return results
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
    { url: 'https://api.github.com/repos/superchargejs/supercharge' },
    { url: 'https://api.github.com/repos/superchargejs/collections' },
    { url: 'https://api.github.com/repos/futurestudio/nodejs-tutorials' },
    { url: 'https://api.github.com/repos/futurestudio/futureflix-starter-kit' }
  ]

  console.log(
    await mapSeries(repos, async (repo, index, array) => {
      return githubDetailsFor(repo)
    })
  )
}

run()
