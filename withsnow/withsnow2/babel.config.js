module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    // Ensure all plugins have the same 'loose' mode setting
    [
      '@babel/plugin-transform-class-properties',
      {loose: true}, // or false, just ensure consistency
    ],
    [
      '@babel/plugin-transform-private-methods',
      {loose: true}, // or false, just ensure consistency
    ],
    [
      '@babel/plugin-transform-private-property-in-object',
      {loose: true}, // or false, just ensure consistency
    ],
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        alias: {
          components: './src/components',
          common: './src/common',
          screens: './src/screens',
        },
      },
    ],
  ],
};
