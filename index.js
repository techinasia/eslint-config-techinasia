module.exports = {
  extends: [
    'eslint:recommended',
    'airbnb',
    'techinasia/rules/base'
  ].map(require.resolve)
};
