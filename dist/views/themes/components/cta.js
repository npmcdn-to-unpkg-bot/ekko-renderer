'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
    var ctas = _ref.ctas;

    var friendlyTypeText = function friendlyTypeText(type) {
        return type.replace(/_/g, ' ').toLowerCase();
    };
    return _react2.default.createElement(
        'div',
        { className: 'cta' },
        ctas.map(function (cta) {
            return _react2.default.createElement(
                'a',
                { className: 'button white capitalise', href: cta.web_url },
                friendlyTypeText(cta.type)
            );
        })
    );
};

module.exports = exports['default'];