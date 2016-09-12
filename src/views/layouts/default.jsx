import React from 'react'

class DefaultLayout extends React.Component {
    render() {
        return (
            <html>
                <head>
                    <title>{this.props.title}</title>
                    <link href="https://unpkg.com/basscss@8.0.1/css/basscss.min.css" rel="stylesheet" />
                    <link href="https://unpkg.com/basscss-colors@2.2.0/css/colors.css" rel="stylesheet" />
                    <link href="https://unpkg.com/basscss-background-colors/css/background-colors.css" rel="stylesheet" />
                    <style type="text/css">
                        {this.props.css}
                    </style>
                </head>
                <body>{this.props.children}</body>
            </html>
        )
    }
}

export default DefaultLayout
