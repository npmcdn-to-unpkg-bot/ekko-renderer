var React = require('react')
var moment = require('moment')

var Standard = React.createClass({

    render: function() {
        if (!this.props.doc) {
            return null
        }
        const styles = {
            backgroundImage: `linear-gradient(
                                  rgba(0,0,0,0.15),
                                  rgba(0,0,0,0.7)
                              ),
                              url(${this.props.doc.data.cover.source})`
        }
        return (
            <div>
                <header style={styles} className="hero">
                    <h1>{this.props.doc.data.name}</h1>
                    <img className="profile-picture" src={this.props.doc.data.picture.url}/>
                </header>
                <main>
                    <h2 className="desc">{this.props.doc.data.about}</h2>
                    <hr/>
                    {this.props.doc.data.posts.map(post => {
                        return <h3>{post.message} - <small>{moment(post.created_time).fromNow()}</small></h3>
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
                    <div className="photo-grid">
                        {this.props.doc.data.photos.map(photo => {
                            let image = photo.images.length
                                ? photo.images[0]
                                : null
                            if (!image) {
                                return null
                            }
                            return <img src={image.source}/>
                        })}
                    </div>
                </main>
            </div>
        );
    }

});

module.exports = Standard;
