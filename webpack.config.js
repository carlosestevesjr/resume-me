const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "ce",
    projectName: "resume-me",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    externals : ['react-router-dom']
    // modify the webpack config however you'd like to by adding to this object
  });
};
