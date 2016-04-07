var React = require('react');

var DefaultLayout = React.createClass({
    render: function() {
        return (
            <html>
                <head>
                    <title>{this.props.title}</title>
                    <link href="https://npmcdn.com/basscss@8.0.1/css/basscss.min.css" rel="stylesheet" />
                    {(this.props.children.props.theme) && (
                        <link
                            href={`${this.props.children.props.env == 'development'
                                    ? 'http://localhost:9000'
                                    : 'https://sites.ekko.site'}/dist/themes/${this.props.children.props.theme.name}/css/app.css`}
                            rel="stylesheet" />
                    )}
                </head>
                <body>{this.props.children}</body>
            </html>
        );
    }
});

module.exports = DefaultLayout;
