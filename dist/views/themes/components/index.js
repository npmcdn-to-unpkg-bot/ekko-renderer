'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _about = require('./about');

var _about2 = _interopRequireDefault(_about);

var _name = require('./name');

var _name2 = _interopRequireDefault(_name);

var _hours = require('./hours');

var _hours2 = _interopRequireDefault(_hours);

var _location = require('./location');

var _location2 = _interopRequireDefault(_location);

var _phone = require('./phone');

var _phone2 = _interopRequireDefault(_phone);

var _events = require('./events');

var _events2 = _interopRequireDefault(_events);

var _posts = require('./posts');

var _posts2 = _interopRequireDefault(_posts);

var _photos = require('./photos');

var _photos2 = _interopRequireDefault(_photos);

var _cta = require('./cta');

var _cta2 = _interopRequireDefault(_cta);

var _profilePicture = require('./profile-picture');

var _profilePicture2 = _interopRequireDefault(_profilePicture);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    Name: _name2.default,
    About: _about2.default,
    Location: _location2.default,
    Phone: _phone2.default,
    Events: _events2.default,
    Posts: _posts2.default,
    Photos: _photos2.default,
    Cta: _cta2.default,
    Hours: _hours2.default,
    ProfilePicture: _profilePicture2.default
};
module.exports = exports['default'];