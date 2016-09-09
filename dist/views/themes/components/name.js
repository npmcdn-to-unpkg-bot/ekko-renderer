'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var name = _ref.name;
  var className = _ref.className;
  var style = _ref.style;
  return _react2.default.createElement(
    'h1',
    { className: 'white my2 ' + className, style: style },
    name
  );
};

module.exports = exports['default'];