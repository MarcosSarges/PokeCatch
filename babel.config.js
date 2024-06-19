module.exports = {
  presets: ["module:@react-native/babel-preset", "@babel/preset-typescript"],
  plugins: [
    [
      "module-resolver",
      {
        root: ["./"],
        alias: {
          "@assets": "./assets",
          "@config": "./src/config",
          "@services": "./src/services",
          "@screens": "./src/screens",
          "@routes": "./src/routes",
          "@hooks": "./src/hooks",
          "@store": "./src/store",
          "@components": "./src/components",
          "@domain": "./src/domain",
          "@styles": "./src/styles",
          "@helpers": "./src/utils/helpers",
          "@constants": "./src/utils/constants",
          "@interfaces": "./src/interfaces",
          "@tests": "./src/utils/tests",
        },
      },
    ],
  ],
};
