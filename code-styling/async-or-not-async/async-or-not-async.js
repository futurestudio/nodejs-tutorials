'use strict'

class PostController {
  async create () {
    // even though Promise.resolve() returns a Promise,
    // the `async` keyword clearly tells you the return value (=Promise)
    console.log('Creating new post.')

    await new Promise(resolve => {
      setTimeout(() => {
        console.log('New post created.')
        resolve()
      }, 1000)
    })

    return Promise.resolve()
  }
}

const controller = new PostController()
controller.create()
