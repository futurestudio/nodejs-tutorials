'use strict'

const string = 'e851e2fa-4f00-4609-9dd2-9b3794c59619'

console.log(string.replace('-', ''))
// -> e851e2fa4f00-4609-9dd2-9b3794c59619

console.log(string.replace(/-/g, ''))
// -> e851e2fa4f0046099dd29b3794c59619
