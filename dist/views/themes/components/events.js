'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var style = {
    event: {
        borderColor: 'rgba(0,0,0,0.1)'
    }
};

exports.default = function (_ref) {
    var events = _ref.events;

    if (!events.length) {
        return _react2.default.createElement('span', null);
    }
    return _react2.default.createElement(
        'div',
        { className: 'events my4 center' },
        _react2.default.createElement(
            'h2',
            { className: 'mb2' },
            'Next events'
        ),
        events && events.map(function (event) {
            return _react2.default.createElement(
                'div',
                { style: style.event, className: 'event mb4 border-bottom pb4' },
                _react2.default.createElement(
                    'div',
                    { className: 'inline-block mx-auto' },
                    _react2.default.createElement('img', { src: event.cover.source, alt: '' })
                ),
                _react2.default.createElement(
                    'h3',
                    { className: 'my2' },
                    event.name
                ),
                _react2.default.createElement(
                    'div',
                    null,
                    event.description && _react2.default.createElement(
                        'p',
                        { className: 'mb2 left-align' },
                        event.description
                    ),
                    _react2.default.createElement(
                        'p',
                        { className: 'left-align' },
                        _react2.default.createElement(
                            'span',
                            { className: 'bold' },
                            'Place:'
                        ),
                        ' ',
                        event.place.name
                    ),
                    _react2.default.createElement(
                        'p',
                        { className: 'left-align' },
                        _react2.default.createElement(
                            'span',
                            { className: 'bold' },
                            'Date:'
                        ),
                        ' ',
                        (0, _moment2.default)(event.start_time).format('MMMM Do YYYY [at] h:mm:ss a')
                    )
                )
            );
        })
    );
};

module.exports = exports['default'];