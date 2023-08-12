module.exports = (api) => {
  api.cache(true);

  const presets = [
    "@babel/preset-react",
    "@babel/preset-env",
    "@babel/preset-typescript",
  ];

  const plugins = [];

  return {
    presets,
    plugins,
  };
};
