module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'standard-with-typescript',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'comma-dangle': 'off',
    '@typescript-eslint/comma-dangle': [
      'error',
      { functions: 'never', arrays: 'always-multiline', objects: 'always-multiline' },
    ],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    'prefer-const': 'off',
    semi: 'off',
    '@typescript-eslint/semi': ['error', 'always'],
    'space-before-function-paren': 'off',
    '@typescript-eslint/space-before-function-paren': ['error', { named: 'never' }],
  },
};
