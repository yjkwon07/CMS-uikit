const path = require('path');
const fs = require('fs');

module.exports = {
  stories: ['../**/*.stories.mdx', '../**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    '@storybook/addon-links',
    '@chakra-ui/storybook-addon',
  ],
  core: {
    builder: 'webpack5',
  },
  features: { emotionAlias: false },
  typescript: { reactDocgen: false },
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      loader: require.resolve('babel-loader'),
    });

    config.resolve.alias = {
      '@emotion/core': packageAbsoluteDir('@emotion/react'),
      '@emotion/styled': packageAbsoluteDir('@emotion/styled'),
    };
    config.resolve.extensions.push('.ts', '.tsx');
    return config;
  },
};

function packageAbsoluteDir(filepath) {
  let currDir = path.dirname(require.resolve(filepath));
  while (true) {
    if (fs.existsSync(path.join(currDir, 'package.json'))) {
      return currDir;
    }
    const { dir, root } = path.parse(currDir);
    if (dir === root) {
      throw new Error(`Could not find package.json in the parent directories starting from ${filepath}.`);
    }
    currDir = dir;
  }
}
