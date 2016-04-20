'use strict';

var React = require('react');
var DefaultLayout = require('./layouts/default');
var Themes = require('./themes/');

var Page = React.createClass({
    displayName: 'Page',

    render: function render() {
        if (!this.props.doc) {
            return React.createElement(
                'p',
                null,
                'Site not found'
            );
        }
        if (!this.props.theme) {
            return React.createElement(
                'p',
                null,
                'No theme selected!'
            );
        }
        var Theme = Themes[this.props.theme.name];
        return React.createElement(
            DefaultLayout,
            { title: this.props.doc.data.name },
            React.createElement(Theme, this.props)
        );
    }
});

module.exports = Page;