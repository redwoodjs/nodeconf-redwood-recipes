const config = {
  rootDir: '../',
  preset: '@redwoodjs/testing/config/jest/api',
}

// For Wallaby Support
if (process.env.DEBUG?.includes('wallaby')) config.runner = 'jest-runner'

module.exports = config
