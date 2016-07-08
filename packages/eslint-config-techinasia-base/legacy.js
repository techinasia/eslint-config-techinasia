module.exports = {
  extends: [
    'eslint-config-airbnb-base/legacy',
    './rules/base'
  ].map(require.resolve),
  rules: {}
};
