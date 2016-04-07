var React = require('react');

var Standard = React.createClass({

    render: function() {
        if (!this.props.doc) {
            return null
        }
        return (
            <div>
                <header>
                    <h1>{this.props.doc.data.name}</h1>
                    <img src={this.props.doc.data.picture.url}/>
                </header>
                <main>
                    <h2 className="desc">{this.props.doc.data.about}</h2>
                    <img src={this.props.doc.data.cover.source}/>
                    <hr/>
                    {this.props.doc.data.posts.map(post => {
                        return <h3>{post.message} - <small>{new Date(post.created_time).toString()}</small></h3>
                    })}
                    <hr/>
                    {(!!(this.props.doc.data.events && this.props.doc.data.events.length)) && (
                        <h2>Events</h2>
                    )}
                    {this.props.doc.data.events.map(event => {
                        return <div>
                            <h3>{event.name}</h3>
                            <p>Description: {event.description}</p>
                            <p>Place: {event.place.name}</p>
                            <p>Date: {new Date(event.start_time).toString()}</p>
                        </div>
                    })}
                    <hr/>
                    {this.props.doc.data.call_to_actions.map(call_to_action => {
                        return <a href={call_to_action.web_url}>{(call_to_action.type == 'CONTACT_US') && 'Contact us'}</a>
                    })}
                    <hr/>
                    {this.props.doc.data.photos.map(photo => {
                        let image = photo.images.length
                            ? photo.images[0]
                            : null
                        if (!image) {
                            return null
                        }
                        return <img src={image.source}/>
                    })}
                </main>
            </div>
        );
    }

});

module.exports = Standard;
