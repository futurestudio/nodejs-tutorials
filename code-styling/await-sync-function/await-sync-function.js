'use strict'

class PostController {
  async find () {
    const result = await this.filter()
    console.log(result)
  }

  filter () {
    return [
      { id: 1 },
      { id: 2 },
      { id: 3 },
      { id: 4 },
      { id: 5 }
    ].filter(({ id }) => id % 2 === 0)
  }
}

const controller = new PostController()
controller.find()
