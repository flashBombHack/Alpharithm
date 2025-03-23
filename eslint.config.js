import prettier from 'eslint-config-prettier'

export default [
  {
    ignores: ['node_modules', 'dist', 'public'],
  },
  {
    languageOptions: {
      sourceType: 'module',
    },
    plugins: {},
    rules: {
      ...prettier.rules,
    },
  },
]
