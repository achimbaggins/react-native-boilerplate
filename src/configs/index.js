const config = {}

// config.environment = 'staging'
// config.environment = 'demo'
config.environment = 'production'

config.URL = {}
config.URL.production       = ''
config.URL.staging          = ''
config.URL.demo             = ''

config.SOCKET = {}
config.SOCKET.production    = ''
config.SOCKET.staging       = ''
config.SOCKET.demo          = ''

config.SENTRY = {}
config.SENTRY.production    = ''
config.SENTRY.staging       = ''
config.SENTRY.demo          = ''

config.ONESIGNAL = {}
config.ONESIGNAL.production = ''
config.ONESIGNAL.staging    = ''
config.ONESIGNAL.demo       = ''

config.NEWS = 'https://web-mo.nusatek.id/wp-json/wp/v2'

export default config