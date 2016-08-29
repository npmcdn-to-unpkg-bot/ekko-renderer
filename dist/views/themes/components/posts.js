'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
    var posts = _ref.posts;

    if (!posts.length) {
        return _react2.default.createElement('span', null);
    }
    return _react2.default.createElement(
        'div',
        { className: 'posts mx-auto max-width-3' },
        _react2.default.createElement(
            'h2',
            { className: 'mb2' },
            'Latest posts'
        ),
        posts && posts.map(function (post) {
            return _react2.default.createElement(
                'div',
                { className: 'post mb3' },
                _react2.default.createElement(
                    'p',
                    { className: 'mb1' },
                    post.message
                ),
                _react2.default.createElement(
                    'p',
                    { className: 'italic h6 mb1' },
                    (0, _moment2.default)(post.created_time).fromNow()
                ),
                _react2.default.createElement('img', { src: post.full_picture, alt: '' })
            );
        })
    );
};

module.exports = exports['default'];