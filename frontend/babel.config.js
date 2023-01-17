module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        "module-resolver",{
          root: ["./src"],
          alias:{
            '@screens': './src/screens',
            '@components': './src/components',
            '@context': './src/context',
            '@services': './src/services',

          }
        },
      ],
      'react-native-reanimated/plugin',
    ]
    
  };
};
