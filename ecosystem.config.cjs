module.exports = {
    apps: [
      {
        name: 'meeio_docs',
        port: '3001',
        exec_mode: 'cluster',
        instances: 'max',
        script: './.output/server/index.mjs'
      }
    ]
  }
  