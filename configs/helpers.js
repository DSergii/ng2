var path = require('path');
var _root = path.resolve(__dirname, '..');

function root(args) {
  args = Array.prototype.slice.call(arguments, 0);
  return path.join.apply(path, [_root].concat(args));
}
exports.root = root;

function getAppEnv(env) {
  let envCommon = {};
  let envSpecific = {};
  try {
    envCommon = require(path.resolve(__dirname, 'env', 'env.common.js'));
    envSpecific = require(path.resolve(__dirname, 'env', 'env.' + env + '.js'));
  } catch (e) {
  }
  return Object.assign({}, envCommon, envSpecific);
}
exports.getAppEnv = getAppEnv;