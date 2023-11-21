module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:jsx-a11y/recommended',
    'prettier',
    'plugin:react-hooks/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      typescript: {
        project: ['./tsconfig.json', './*/tsconfig.json'],
        extensions: ['.ts', '.tsx'],
      },
    },
  },
  plugins: ['@typescript-eslint', 'testing-library', 'import', 'react', 'jsx-a11y', 'unused-imports', 'no-relative-import-paths'],
  rules: {
    'no-console': 'warn',
    'no-debugger': 'warn',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/consistent-type-imports': ['error', { prefer: 'type-imports' }],
    '@typescript-eslint/no-unused-vars': 'error',
    'import/no-named-as-default-member': 'off',
    'import/no-named-as-default': 'off',
    'react/jsx-curly-brace-presence': ['error', { props: 'always', children: 'ignore' }],
    'import/order': [
      'error',
      {
        groups: [
          ['external', 'builtin'],
          ['parent', 'internal'],
          ['index', 'sibling'],
        ],
        'newlines-between': 'always',
      },
    ],
    'jsx-a11y/aria-role': [
      'warn',
      {
        ignoreNonDOM: true,
      },
    ],
    'unused-imports/no-unused-imports': 'error',
    'react/react-in-jsx-scope': 'off',
    'no-relative-import-paths/no-relative-import-paths': [
      'error',
      { allowSameFolder: true }
    ],
    'no-restricted-imports': [
      'error',
      {
        'paths': [
          {
            'name': 'lodash',
            'message': 'Import [module] from lodash/[module] instead'
          }
        ],
        'patterns': [
          {
            'group': ['lodash/set'],
            'message': 'Import [module] from lodash/fp/[module] instead'
          }
        ]
      }
    ],
    'curly': ['error', 'all']
  },
};
