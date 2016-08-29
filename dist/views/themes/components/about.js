"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
    var about = _ref.about;
    var description = _ref.description;

    return _react2.default.createElement(
        "div",
        { className: "center max-width-3 mx-auto my4" },
        _react2.default.createElement(
            "h2",
            { className: "my2" },
            about
        ),
        _react2.default.createElement(
            "p",
            null,
            description
        )
    );
};

module.exports = exports["default"];