var React = require('react');
var DefaultLayout = require('./layouts/default');
var Themes = require('./themes/')

var Page = React.createClass({
    render: function() {
        if(!this.props.doc){
            return <p>Site not found</p>
        }
        if(!this.props.theme){
            return <p>No theme selected!</p>
        }
        var Theme = Themes[this.props.theme.name]
        return (
            <DefaultLayout title={this.props.doc.data.name}>
                <Theme {...this.props} />
            </DefaultLayout>
        );
    }
});

module.exports = Page;
