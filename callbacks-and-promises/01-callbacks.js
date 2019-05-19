'use strict'

function grindCoffee (callback) {
  console.log('Beans grinded.')
  callback()
}

function brewCoffee (callback) {
  console.log('Coffee brewed.')
  callback()
}

function drinkCoffee (callback) {
  console.log('Work hard. Brew hard.')
  callback()
}

function breakfast () {
  grindCoffee(() => {
    brewCoffee(() => {
      drinkCoffee(() => {
        console.log('Fiery for the day!')
      })
    })
  })
}

breakfast()
