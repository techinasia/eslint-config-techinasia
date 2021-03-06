module.exports = {
  rules: {
    'arrow-parens': ['error', 'always'],
    indent: [2, 2, { SwitchCase: 1 }],
    'no-param-assign': 0,
    'no-underscore-dangle': 0,
    'max-len': [1, 100, 4, {
      ignoreComments: true,
      ignoreUrls: true
    }]
  }
};
