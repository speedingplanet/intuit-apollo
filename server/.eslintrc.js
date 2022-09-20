module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: ['eslint:recommended', 'standard'],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'comma-dangle': [
      'error',
      { functions: 'never', arrays: 'always-multiline', objects: 'always-multiline' },
    ],
    'no-unused-vars': 'warn',
    'prefer-const': 'off',
    semi: ['error', 'always'],
    'space-before-function-paren': ['error', { named: 'never' }],
  },
};
