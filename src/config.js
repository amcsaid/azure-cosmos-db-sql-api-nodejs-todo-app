const config = {}

config.host = process.env.HOST || 'https://simple-web-app-database.documents.azure.com:443/'
config.authKey =
  process.env.AUTH_KEY ||
  'Q7gcmHiTfWc4ol8iAPN5yT7ALA0MuPyMDuiKYUFkwQi59cgCdbXtGWwaYnOeX45OTcHza90myzmoACDbT66Zsw=='
config.databaseId = 'ToDoList'
config.containerId = 'Items'

if (config.host.includes('https://localhost:')) {
  console.log('Local environment detected')
  console.log(
    'WARNING: Disabled checking of self-signed certs. Do not have this code in production.'
  )
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'
  console.log(
    `Go to http://localhost:${process.env.PORT || '3000'} to try the sample.`
  )
}

module.exports = config
