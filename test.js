'use strict'

var tap = require('tap')
var bench = require('./')

tap.test('basic run', function (t) {
  var data = {
    name: 'some benchmark',
    task(cb) {
      setImmediate(cb)
    }
  }

  bench(data, function (result) {
    t.equal(result.name, data.name)
    t.equal(result.iterations, 10000)
    t.ok(result.time.seconds > 0)
    t.ok(result.time.milliseconds > 0)
    t.ok(result.time.nanoseconds > 0)
    t.end()
  })
})

tap.test('custom iteration count', function (t) {
  var data = {
    name: 'some benchmark',
    iterations: 10,
    task(cb) {
      setImmediate(cb)
    }
  }

  bench(data, function (result) {
    t.equal(result.iterations, 10)
    t.end()
  })
})
