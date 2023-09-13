// module.exports = {
//     root: true,
//     extends: '@react-native',
//   };

module.exports = {
  "env": {
      "browser": true,
      "es2021": true,
      "jest": true
  },
  "extends": ["airbnb", "airbnb/hooks"],
  "overrides": [
      {
          "env": {
              "node": true
          },
          "files": [
              ".eslintrc.{js,cjs}"
          ],
          "parserOptions": {
              "sourceType": "script"
          }
      }
  ],
  "parserOptions": {
      "ecmaVersion": "latest",
      "sourceType": "module"
  },
  "plugins": [
      "react",
      // "jest"
  ],
  "rules": {
    "react/prop-types": 0
  }
}