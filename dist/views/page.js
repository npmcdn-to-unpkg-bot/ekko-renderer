'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _default = require('./layouts/default');

var _default2 = _interopRequireDefault(_default);

var _themes = require('./themes/');

var _themes2 = _interopRequireDefault(_themes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Page = function (_React$Component) {
    _inherits(Page, _React$Component);

    function Page() {
        _classCallCheck(this, Page);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(Page).apply(this, arguments));
    }

    _createClass(Page, [{
        key: 'render',
        value: function render() {
            if (!this.props.doc) {
                return _react2.default.createElement(
                    'p',
                    null,
                    'Site not found'
                );
            }
            if (!this.props.theme) {
                return _react2.default.createElement(
                    'p',
                    null,
                    'No theme selected!'
                );
            }
            var Theme = _themes2.default[this.props.theme.name];
            return _react2.default.createElement(
                _default2.default,
                { title: this.props.doc.data.name, theme: this.props.theme.name, production: this.props.env == 'production' },
                _react2.default.createElement(Theme, this.props)
            );
        }
    }]);

    return Page;
}(_react2.default.Component);

exports.default = Page;
module.exports = exports['default'];