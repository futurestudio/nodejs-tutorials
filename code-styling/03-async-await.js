'use strict'

async function grindCoffee () {
  console.log('Beans grinded.')
}

async function brewCoffee () {
  console.log('Coffee brewed.')
}

async function drinkCoffee () {
  console.log('Work hard. Brew hard.')
}

async function breakfast () {
  // everything is top-level when using async/await
  // no nested callbacks to retrieve the results

  await grindCoffee()
  await brewCoffee()
  await drinkCoffee()
  console.log('Fiery for the day!')
}

breakfast()
