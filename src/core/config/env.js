const envObj = {
  API_URL: process.env.API_URL,
  ASSET_PREFIX: process.env.ASSET_PREFIX || '/',
  APP_URL: process.env.APP_URL || 'http://localhost:3000'
}

module.exports = envObj
