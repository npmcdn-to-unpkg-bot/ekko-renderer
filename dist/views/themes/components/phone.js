"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var phone = _ref.phone;
  return _react2.default.createElement(
    "p",
    { className: "my2 white" },
    phone
  );
};

module.exports = exports["default"];