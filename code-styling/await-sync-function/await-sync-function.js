'use strict'

class PostController {
  async find () {
    const result = await this._filter()
    console.log(result)
  }

  _filter () {
    return [ 1, 2, 3, 4, 5 ].filter(id => id % 2 === 0)
  }
}

const controller = new PostController()
controller.find()
