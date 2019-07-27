module.exports = (api) => {
  api.cache(true);

  const presets = [
    [ "@babel/preset-env", { modules: false} ]
  ];
  const plugins = [
    // stage 3
    [ "@babel/plugin-proposal-nullish-coalescing-operator" ]
    // stage 1
  , [ "@babel/plugin-proposal-pipeline-operator", { "proposal": "fsharp" } ]
  , [ "@babel/plugin-proposal-partial-application" ]
  , [ "@babel/plugin-proposal-optional-chaining" ]
  ];

  return { presets, plugins };
};
