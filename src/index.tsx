import { init } from '@cognition-app/app'
import registry from '@cognition-app/registry'
import config from './config'

init({
  config: config,
  plugins: [registry],
})
