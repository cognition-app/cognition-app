import AppConfigSchema from '@cognition-app/app/dist/schema/app/config'

const config: AppConfigSchema = {
  $schema: 'https://raw.githubusercontent.com/cognition-app/app/master/dist/schema/app/config',
  view: '@cognition-app/view-dummy',
  plugins: [
    '@cognition-app/view-dummy'
  ]
}

export default config