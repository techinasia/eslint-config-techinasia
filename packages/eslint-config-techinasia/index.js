module.exports = {
  extends: [
    'eslint-config-airbnb',
    'eslint-config-techinasia-base'
  ].map(require.resolve),
  rules: {
    'react/forbid-prop-types': 0,
    'react/prefer-stateless-function': 1
  }
};
