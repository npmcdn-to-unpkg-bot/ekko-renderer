"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
    var picture = _ref.picture;

    return _react2.default.createElement(
        "div",
        { className: "border inline-block p1 bg-white" },
        _react2.default.createElement("img", { src: picture })
    );
};

module.exports = exports["default"];