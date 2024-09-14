import eslintPluginPrettier from 'eslint-plugin-prettier'

import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'

export default tseslint.config(
      { ignores: ['dist', 'vite.config.ts'] },
      {
            extends: [js.configs.recommended, ...tseslint.configs.recommended],
            files: ['**/*.{ts,tsx}'],
            languageOptions: {
                  ecmaVersion: 2020,
                  globals: globals.browser
            },
            plugins: {
                  'react-hooks': reactHooks,
                  'react-refresh': reactRefresh,
                  prettier: eslintPluginPrettier
            },
            rules: {
                  'prettier/prettier': [
                        'warn',
                        {
                              arrowParens: 'always',
                              semi: false,
                              trailingComma: 'none',
                              tabWidth: 6,
                              endOfLine: 'auto',
                              useTabs: false,
                              singleQuote: true,
                              printWidth: 100,
                              jsxSingleQuote: true
                        }
                  ],
                  'no-unused-vars': 'off',
                  '@typescript-eslint/no-unused-vars': 'error',
                  ...reactHooks.configs.recommended.rules,
                  'react-refresh/only-export-components': ['warn', { allowConstantExport: true }]
            }
      }
)
