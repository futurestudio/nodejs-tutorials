'use strict'

function grindCoffee () {
  console.log('Beans grinded.')
  return Promise.resolve()
}

function brewCoffee () {
  console.log('Coffee brewed.')
  return Promise.resolve()
}

function drinkCoffee () {
  console.log('Work hard. Brew hard.')
  return Promise.resolve()
}

function breakfast () {
  grindCoffee()
    .then(() => brewCoffee())
    .then(() => drinkCoffee())
    .then(() => console.log('Fiery for the day!'))
}

breakfast()
