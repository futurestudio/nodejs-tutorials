'use strict'

class NotEnoughCoffee extends Error {
  constructor (message) {
    super(message)

    this.name = this.constructor.name
  }
}

throw new NotEnoughCoffee('Well, you may need another coffee :)')
