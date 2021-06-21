"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

exports.__esModule = true;
exports.doesIconExist = doesIconExist;

var fs = _interopRequireWildcard(require("fs"));

/**
 * Check if the icon exists on the filesystem
 *
 * @param {String} srcIcon Path of the icon
 */
function doesIconExist(srcIcon) {
  try {
    return fs.statSync(srcIcon).isFile();
  } catch (e) {
    if (e.code !== "ENOENT") {
      throw e;
    }

    return false;
  }
}