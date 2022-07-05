const core = require('@actions/core')
const github = require('@actions/github')

try {
  console.log('This is a clean up job.')
} catch (error) {
  core.setFailed(error.message)
}
