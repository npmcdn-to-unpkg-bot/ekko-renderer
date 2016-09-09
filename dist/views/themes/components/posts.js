'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _reactLinkify = require('react-linkify');

var _reactLinkify2 = _interopRequireDefault(_reactLinkify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var style = {
    post: {
        borderColor: 'rgba(0,0,0,0.1)'
    },
    timestamp: {
        color: '#777',
        marginBottom: '0.25rem'
    }
};

exports.default = function (_ref) {
    var posts = _ref.posts;

    if (!posts.length) {
        return _react2.default.createElement('span', null);
    }
    return _react2.default.createElement(
        'div',
        { className: 'posts max-width-2 mx-auto mt4' },
        _react2.default.createElement(
            'h2',
            { className: 'mb2 center' },
            'Latest posts'
        ),
        posts.map(function (post, index) {
            return _react2.default.createElement(
                'div',
                {
                    style: style.post,
                    className: 'post mb4 pb4 ' + (posts.length - 1 !== index ? 'border-bottom' : '') },
                _react2.default.createElement(
                    'p',
                    { style: style.timestamp, className: 'italic h6' },
                    (0, _moment2.default)(post.created_time).fromNow()
                ),
                _react2.default.createElement(
                    _reactLinkify2.default,
                    null,
                    _react2.default.createElement(
                        'p',
                        { className: 'mb2' },
                        post.message
                    )
                ),
                _react2.default.createElement('img', { src: post.full_picture, alt: '' })
            );
        })
    );
};

module.exports = exports['default'];