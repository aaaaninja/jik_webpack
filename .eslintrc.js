module.exports = {
  extends: "eslint:recommended"
, parser: "babel-eslint"
, parserOptions: {
    sourceType: "module"
//  , ecmaVersion: 6
  }
, rules: {
    semi: "error"
  }
, env: {
    browser: true
  , es6: true
  , node: true
  }
}
