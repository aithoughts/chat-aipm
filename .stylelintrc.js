const config = require('@aipmorg/lint').stylelint;

module.exports = {
  ...config,
  rules: {
    'selector-id-pattern': null,
    ...config.rules,
  },
};
