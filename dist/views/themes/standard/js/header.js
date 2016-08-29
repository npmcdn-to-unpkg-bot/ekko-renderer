'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _name = require('./../../components/name');

var _name2 = _interopRequireDefault(_name);

var _profilePicture = require('./../../components/profile-picture');

var _profilePicture2 = _interopRequireDefault(_profilePicture);

var _phone = require('./../../components/phone');

var _phone2 = _interopRequireDefault(_phone);

var _cta = require('./../../components/cta');

var _cta2 = _interopRequireDefault(_cta);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
    var cover = _ref.cover;
    var picture = _ref.picture;
    var name = _ref.name;
    var phone = _ref.phone;
    var callToActions = _ref.callToActions;


    var styles = {
        backgroundImage: cover ? 'linear-gradient(\n                              rgba(0,0,0,0.4),\n                              rgba(0,0,0,0.4)\n                          ),\n                          url(' + cover.source + ')' : 'none',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    };

    return _react2.default.createElement(
        'header',
        { style: styles, className: 'px2 py4 center' },
        _react2.default.createElement(_name2.default, { name: name }),
        _react2.default.createElement(_profilePicture2.default, { picture: picture.url }),
        _react2.default.createElement(_phone2.default, { phone: phone }),
        _react2.default.createElement(_cta2.default, { ctas: callToActions })
    );
};

module.exports = exports['default'];