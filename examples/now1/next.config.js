const withOffline = require('next-offline')

const nextConfig = {
    workboxOpts: {
        runtimeCaching: [
          {
            urlPattern: /.png$/,
            handler: 'cacheFirst'
          },
          {
            urlPattern: /https://jsonplaceholder.typicode.com/,
            handler: 'networkFirst',
            options: {
              cacheableResponse: {
                statuses: [0, 200],
                headers: {
                  'x-test': 'true'
                }
              }
            }
          }
        ]
      }
  }

module.exports = withOffline(nextConfig)