'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var API_KEY = 'AIzaSyCPuOwTgswye73SH5wa_5mlCgOYorCR3fY';

exports.default = function (_ref) {
    var location = _ref.location;

    if (!location) {
        return _react2.default.createElement('span', null);
    }
    return _react2.default.createElement(
        'div',
        { className: 'my2 flex justify-center' },
        _react2.default.createElement(
            'div',
            { className: 'mr1' },
            _react2.default.createElement(
                'p',
                null,
                location.street
            ),
            _react2.default.createElement(
                'p',
                null,
                location.city
            ),
            _react2.default.createElement(
                'p',
                null,
                location.country
            ),
            _react2.default.createElement(
                'p',
                null,
                location.zip
            )
        ),
        location.street && _react2.default.createElement('iframe', {
            className: 'ml1', src: 'https://www.google.com/maps/embed/v1/place?key=' + API_KEY + '&q=' + (location.street || '') + ', ' + location.city + ', ' + location.zip, frameBorder: '0' })
    );
};

module.exports = exports['default'];