'use strict'

const today = new Date()
const tomorrow = new Date()

// add 1 day to today
tomorrow.setDate(today.getDate() + 1)

console.log(tomorrow)
