module.exports = {
  mode: "production" //, mode: "development"
//, watch: true
, entry: `${__dirname}/src/js/app.js`
, output: {
    filename: "bundle.js"
  , path: `${__dirname}/dist`
  }
, module: {
    rules: [
      { test: /\.js$/
      , exclude: /node_modules/
      , use: [
          { loader: "babel-loader" }
        ]
      }
    , { enforce: "pre"
      , test: /\.js$/
      , exclude: /node_modules/
      , loader: "eslint-loader"
      }
    ]
  }
};
