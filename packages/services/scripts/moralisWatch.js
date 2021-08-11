const watch = require('node-watch')
const { exec } = require('child_process')

const run = () => {
  exec('yarn moralis:functions', function(error, stdout, stderr) {
    console.log(stdout)
    if (error) console.log(error)
    if (stderr) console.log(stderr)
  })
}

console.log('🔬 Watching Functions...')
watch(__dirname + '/../moralis/functions.js', { recursive: false }, function(evt, name) {
  console.log('%s changed.', name)
  run()
})

run()
