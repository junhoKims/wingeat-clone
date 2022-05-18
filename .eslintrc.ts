module.exports = {
  root: true,
  extends: ['@croquiscom/eslint-config/requiring-type-checking'],
  parserOptions: {
    project: [`${__dirname}/tsconfig.json`],
  },
  rules: {
    'react-hooks/exhaustive-deps': 'off',
  },
};
