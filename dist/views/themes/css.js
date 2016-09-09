'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var fs = require('fs');

var standard = fs.readFileSync(__dirname + '/standard/css/app.css', 'utf8');

exports.default = {
    standard: standard
};
module.exports = exports['default'];