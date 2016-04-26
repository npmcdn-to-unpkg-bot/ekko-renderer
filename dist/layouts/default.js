"use strict";

var React = require('react');

var DefaultLayout = React.createClass({
    displayName: "DefaultLayout",

    render: function render() {
        return React.createElement(
            "html",
            null,
            React.createElement(
                "head",
                null,
                React.createElement(
                    "title",
                    null,
                    this.props.title
                ),
                React.createElement("link", { href: "https://npmcdn.com/basscss@8.0.1/css/basscss.min.css", rel: "stylesheet" }),
                React.createElement("link", { href: "https://fonts.googleapis.com/css?family=Lato", rel: "stylesheet", type: "text/css" }),
                this.props.children.props.theme && React.createElement("link", {
                    href: (this.props.children.props.env == 'development' ? 'http://localhost:9000' : 'https://sites.ekko.site') + "/dist/themes/" + this.props.children.props.theme.name + "/css/app.css",
                    rel: "stylesheet" })
            ),
            React.createElement(
                "body",
                null,
                this.props.children
            )
        );
    }
});

module.exports = DefaultLayout;