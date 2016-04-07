var React = require('react')
var ReactDOMServer = require('react-dom/server')

require('babel-register')({
    presets: ["react", "es2015"]
})

function renderFile(env, options, cb, client) {
    try {
        var component = require('./views/page')
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
