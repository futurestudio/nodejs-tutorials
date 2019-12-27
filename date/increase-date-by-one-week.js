'use strict'

const today = new Date()
const nextWeek = new Date()

// add 7 days to the current date
nextWeek.setDate(today.getDate() + 7)

console.log(nextWeek)
