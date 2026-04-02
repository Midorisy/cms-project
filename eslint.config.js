import antfu from '@antfu/eslint-config'

export default antfu({
  type: 'app',
  // TypeScript and Vue are autodetected, you can also explicitly enable them:
  typescript: true,
  vue: true,
  // Disable jsonc and yaml support
  jsonc: false,
  yaml: false,
  rules: {
    'no-console': 'warn',
  },
})
