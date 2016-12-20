module.exports = {
  extends: [
    'eslint-config-airbnb',
    'eslint-config-techinasia-base'
  ].map(require.resolve),
  rules: {
    'jsx-a11y/no-static-element-interactions': 0,
    'react/forbid-prop-types': 0,
    'react/prefer-stateless-function': 1
  }
};
