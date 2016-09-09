'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var style = {
    img: {
        borderWidth: '5px',
        borderColor: '#fff'
    }
};

exports.default = function (_ref) {
    var picture = _ref.picture;

    return _react2.default.createElement(
        'div',
        { className: 'inline-block' },
        _react2.default.createElement('img', { style: style.img, className: 'border', src: picture })
    );
};

module.exports = exports['default'];