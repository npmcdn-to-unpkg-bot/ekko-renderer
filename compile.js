var React = require('react')
var ReactDOMServer = require('react-dom/server')

function renderFile(env, options, cb, client) {
    try {
        var component = require('./dist/page')
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
