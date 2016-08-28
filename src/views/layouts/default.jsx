import React from 'react'

class DefaultLayout extends React.Component {
    render() {
        return (
            <html>
                <head>
                    <title>{this.props.title}</title>
                    <link href="https://npmcdn.com/basscss@8.0.1/css/basscss.min.css" rel="stylesheet" />
                    <link href="https://npmcdn.com/basscss-colors@2.2.0/css/colors.css" rel="stylesheet" />
                    <link href="https://npmcdn.com/basscss-background-colors/css/background-colors.css" rel="stylesheet" />
                    <link rel="stylesheet" href={`${this.props.production ? 'http://sites.ekko.site' : 'http://localhost:9000'}/css/${this.props.theme}/app.css`} />
                </head>
                <body>{this.props.children}</body>
            </html>
        )
    }
}

export default DefaultLayout
