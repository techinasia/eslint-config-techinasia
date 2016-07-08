module.exports = {
  extends: [
    'eslint-config-airbnb',
    'eslint-config-techinasia-base'
  ].map(require.resolve),
  rules: {
    'react/prefer-stateless-function': 1
  }
};
