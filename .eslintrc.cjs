module.exports = {
  root: true,
  env: {
    browser: true,
    es2022: true,
    node: true
  },
  extends: [
    'eslint:recommended'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
    'prefer-const': 'error',
    'no-var': 'error',
    'no-console': 'warn',
    'eqeqeq': ['error', 'always'],
    'curly': ['error', 'all'],
    'no-trailing-spaces': 'error',
    'eol-last': 'error'
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint'],
      extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended'
      ],
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json'
      },
      rules: {
        '@typescript-eslint/no-unused-vars': 'warn',
        '@typescript-eslint/no-explicit-any': 'warn'
      }
    },
    {
      files: ['*.astro'],
      parser: 'astro-eslint-parser',
      plugins: ['astro'],
      extends: [
        'eslint:recommended',
        'plugin:astro/recommended'
      ],
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro']
      }
    }
  ]
};