'use strict'

const v8 = require('v8')

//console.log(v8.getHeapStatistics())

const totalHeapSize = v8.getHeapStatistics().total_available_size
console.log(`Total heap size (bytes) ${totalHeapSize}, (GB ~${(totalHeapSize / 1024 / 1024 / 1024).toFixed(2)})`)
