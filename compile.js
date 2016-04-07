var React = require('react')
var ReactDOMServer = require('react-dom/server')

require('babel-register')

function renderFile(env, options, cb, client) {
    try {
        var component = require('./views/page.jsx')
        var markup = '<!DOCTYPE html>'
        markup += ReactDOMServer.renderToStaticMarkup(
            React.createElement(component, Object.assign({}, options, {
                env
            }))
        )
    } catch (e) {
        return client ? e : cb(e)
    }
    if (client) {
        return markup
    }
    cb(null, markup)
}

module.exports = renderFile
