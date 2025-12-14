const path = require('path');
const { getDefaultConfig } = require('expo/metro-config');

const projectRoot = __dirname;
const workspaceRoot = path.resolve(projectRoot, '..');

const config = getDefaultConfig(projectRoot);

// Watch workspace for changes
config.watchFolders = [workspaceRoot];

// Direct resolution for workspace package
config.resolver = {
  ...config.resolver,
  nodeModulesPaths: [
    path.resolve(projectRoot, 'node_modules'),
    path.resolve(workspaceRoot, 'node_modules'),
  ],
  extraNodeModules: {
    '@kdn0325/react-native-outlined-text': path.resolve(workspaceRoot),
  },
};

module.exports = config;
