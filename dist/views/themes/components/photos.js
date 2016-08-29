"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
    var photos = _ref.photos;

    if (!photos.length) {
        return _react2.default.createElement("span", null);
    }
    return _react2.default.createElement(
        "div",
        { className: "photo-grid flex flex-wrap flex-column max-width-3 mx-auto" },
        photos && photos.map(function (photo) {
            var image = photo.images.length ? photo.images[0] : null;
            if (!image) {
                return null;
            }
            return _react2.default.createElement("img", { src: image.source });
        })
    );
};

module.exports = exports["default"];