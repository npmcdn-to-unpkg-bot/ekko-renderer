'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var style = {
    about: {
        borderColor: 'rgba(0,0,0,0.1)'
    }
};

exports.default = function (_ref) {
    var about = _ref.about;
    var description = _ref.description;

    return _react2.default.createElement(
        'div',
        { style: style.about, className: 'center mb4 border-bottom pb4 max-width-3 mx-auto' },
        _react2.default.createElement(
            'h2',
            { className: 'my2' },
            about
        ),
        _react2.default.createElement(
            'p',
            null,
            description
        )
    );
};

module.exports = exports['default'];