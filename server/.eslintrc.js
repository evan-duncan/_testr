module.exports = {
  "extends": "airbnb-base",
  "env": {
    "node": true,
    "mocha": true,
  },
  "plugins": [
    "mocha"
  ],
  "rules": {
    "mocha/no-exclusive-tests": "error",
    "global-require": 0,
    "no-param-reassign": 0,
  }
};

