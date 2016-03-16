module.exports = {
  rules: {
    'comma-dangle': 0,
    indent: [2, 2, { SwitchCase: 1 }],
    'no-param-assign': 0,
    'max-len': [1, 100, 4, {
      ignoreComments: true,
      ignoreUrls: true
    }],
    'react/prefer-stateless-function': 1
  }
};
