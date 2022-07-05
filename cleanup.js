const core = require('@actions/core')

try {
  console.log('This is a clean up job.')
} catch (error) {
  core.setFailed(error.message)
}
