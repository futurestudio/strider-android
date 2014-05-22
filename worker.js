var detect = require('strider-detection-rules')
var fs = require('fs')
var path = require('path')

function shellCommand(command) {
  if (!command || !command.replace(/#[^\n]*/g, '').trim().length) return
  return {
    command: 'sh',
    args: ['-x', '-c', command]
  }
}

module.exports = {
  init: function (config, job, context, done) {
    var test = undefined
    if (config && config.test !== 'none') {
      test = config.test
    }
    var defaultPrepare = function (context, done) {
        // TODO
    }
    var prepare = defaultPrepare
    if (config && config.prepare) {
      prepare = shellCommand(config.prepare)
    }
    done(null, {
      env: { 'ANDROID_HOME': '/todo/'}, // TODO
      prepare: prepare,
      test: test
    })
  },
  autodetect: {
    filename: null,
    exists: false,
    language: 'Java',
    framework: 'Android'
  }
}
