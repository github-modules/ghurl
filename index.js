#!/usr/bin/env node

const {promisify} = require('util')
const ghauth = promisify(require('ghauth'))
const {lister} = require('ghutils')
const pkg = require('./package.json')
const args = require('minimist')(process.argv.slice(2))
const authOptions = {
  configName: pkg.name, 
  note: pkg.description
}

let path = args._[0]

if (!path) {
  console.error('Specify a path. Example:\n\nghurl users/zeke/subscriptions')
  process.exit()
}

if (!path.startsWith('/')) path = '/' + path

const url = `https://api.github.com${path}`

async function go () {
  const auth = await ghauth(authOptions)
  console.error(url)
  
  lister(auth, url, {}, (err, results) => {
    if (err) {
      console.error(err)
      process.exit()
    }
    process.stdout.write(JSON.stringify(results, null, 2))
  })
}

go()