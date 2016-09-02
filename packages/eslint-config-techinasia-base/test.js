module.exports = {
  extends: [
    './index',
    './rules/test'
  ].map(require.resolve),
  rules: {}
};
