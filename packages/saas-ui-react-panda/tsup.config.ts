import { defineConfig } from 'tsup'
import config from '../../tsup.config'

export default defineConfig({
  ...config,
  external: [
    '@saas-ui/panda',
    'react',
    'react-dom',
    '@types/react',
    '@types/react-dom',
  ],
})
