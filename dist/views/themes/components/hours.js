"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
    var hours = _ref.hours;

    if (!hours) {
        return _react2.default.createElement("span", null);
    }
    return _react2.default.createElement(
        "div",
        { className: "my2 ml2" },
        _react2.default.createElement(
            "ul",
            { className: "list-reset" },
            _react2.default.createElement(
                "li",
                null,
                "Monday ",
                _react2.default.createElement(
                    "span",
                    { className: "bold right pl2" },
                    hours.mon_1_open,
                    " - ",
                    hours.mon_1_close
                )
            ),
            _react2.default.createElement(
                "li",
                null,
                "Tuesday ",
                _react2.default.createElement(
                    "span",
                    { className: "bold right pl2" },
                    hours.tue_1_open,
                    " - ",
                    hours.tue_1_close
                )
            ),
            _react2.default.createElement(
                "li",
                null,
                "Wednesday ",
                _react2.default.createElement(
                    "span",
                    { className: "bold right pl2" },
                    hours.wed_1_open,
                    " - ",
                    hours.wed_1_close
                )
            ),
            _react2.default.createElement(
                "li",
                null,
                "Thursday ",
                _react2.default.createElement(
                    "span",
                    { className: "bold right pl2" },
                    hours.thu_1_open,
                    " - ",
                    hours.thu_1_close
                )
            ),
            _react2.default.createElement(
                "li",
                null,
                "Friday ",
                _react2.default.createElement(
                    "span",
                    { className: "bold right pl2" },
                    hours.fri_1_open,
                    " - ",
                    hours.fri_1_close
                )
            ),
            _react2.default.createElement(
                "li",
                null,
                "Saturday ",
                _react2.default.createElement(
                    "span",
                    { className: "bold right pl2" },
                    hours.sat_1_open,
                    " - ",
                    hours.sat_1_close
                )
            ),
            _react2.default.createElement(
                "li",
                null,
                "Sunday ",
                _react2.default.createElement(
                    "span",
                    { className: "bold right pl2" },
                    hours.sun_1_open,
                    " - ",
                    hours.sun_1_close
                )
            )
        )
    );
};

module.exports = exports["default"];