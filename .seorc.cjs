const { defineConfig } = require('@lobehub/seo-cli');

module.exports = defineConfig({
  entry: ['./docs/**/*.mdx'],
  modelName: 'gpt-3.5-turbo',
  experimental: {
    jsonMode: true,
  },
});
