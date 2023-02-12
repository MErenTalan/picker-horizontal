module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
    [
      "module-resolver",
      {
        alias: {
          "@merentalan/picker": "./js",
        },
        cwd: "babelrc",
      },
    ],
  ],
};
