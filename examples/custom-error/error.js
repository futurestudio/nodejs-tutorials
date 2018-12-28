'use strict'

class NotEnoughCoffeeError extends Error {
  constructor (message) {
    super(message)

    this.name = this.constructor.name
  }
}

throw new NotEnoughCoffeeError('You had to few coffee today. Get another one :)')
