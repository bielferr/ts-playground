import js from '@eslint/js'
import tseslint from 'typescript-eslint'
import prettier from 'eslint-plugin-prettier'

export default [
  {
    ignores: ['node_modules', 'dist'],
  },

  js.configs.recommended,

  ...tseslint.configs.recommended,

  {
    plugins: {
      prettier,
    },
    rules: {
      'prettier/prettier': 'error',
    },
  },
]
