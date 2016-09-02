module.exports = {
  extends: [
    'eslint-config-techinasia-base/test'
  ].map(require.resolve),
  rules: {
    'react/jsx-filename-extension': 0
  }
};
