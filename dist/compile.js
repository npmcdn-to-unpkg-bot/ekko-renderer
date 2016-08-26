'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

var _server2 = _interopRequireDefault(_server);

var _page = require('./views/page');

var _page2 = _interopRequireDefault(_page);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var renderFile = function renderFile(env, options, cb, client) {
    try {
        var markup = '<!DOCTYPE html>';
        markup += _server2.default.renderToStaticMarkup(_react2.default.createElement(_page2.default, Object.assign({}, options, {
            env: env
        })));
    } catch (e) {
        return client ? e : cb(e);
    }
    if (client) {
        return markup;
    }
    cb(null, markup);
};

exports.default = renderFile;
module.exports = exports['default'];