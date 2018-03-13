'use strict'

const objectAssign = require('object-assign')
const repeatFn = require('repeat-fn')
const timeFn = require('time-fn')

module.exports = function bench (job, callback) {
  if (!job.iterations) job.iterations = 10000
  const task = repeatFn.bind(null, job.iterations, job.task.bind(job))
  timeFn(task, function repeatCallback (time) {
    callback(objectAssign(job, { time: time }))
  })
}
