'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _fs = require('fs');

var standard = (0, _fs.readFileSync)(require.resolve('./standard/css/app.css'), "utf8");
exports.default = {
    standard: standard
};
module.exports = exports['default'];