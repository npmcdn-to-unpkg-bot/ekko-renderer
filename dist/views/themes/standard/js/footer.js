'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var style = {
    footer: {
        borderColor: 'rgba(0,0,0,0.1)'
    }
};

exports.default = function (_ref) {
    var about = _ref.about;

    return _react2.default.createElement(
        'div',
        { style: style.footer, className: 'max-width-4 mx-auto p2 border-top mt4' },
        _react2.default.createElement(
            'p',
            { className: 'inline-block' },
            about
        ),
        _react2.default.createElement(
            'p',
            { className: 'right' },
            new Date().getFullYear()
        )
    );
};

module.exports = exports['default'];