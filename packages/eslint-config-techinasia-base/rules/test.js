module.exports = {
  env: {
    mocha: true
  },
  rules: {
    'import/no-extraneous-dependencies': [2, {
      devDependencies: true
    }]
  }
};
