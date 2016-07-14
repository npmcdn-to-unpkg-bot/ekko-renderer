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
        const cta = this.props.doc.data.call_to_actions[0]
        return (
            <div>
                <header style={styles} className="hero">
                    <h1>{this.props.doc.data.name}</h1>
                    <img className="profile-picture" src={this.props.doc.data.picture.url}/>
                </header>
                <main>
                    <h2 className="desc">{this.props.doc.data.about}</h2>
                    <div className="events">
                        {this.props.doc.data.events.map(event => {
                            return <div className="event">
                                <div className="event-cover">
                                    <img src={event.cover.source} alt=""/>
                                </div>
                                <h3 className="event-name">{event.name}</h3>
                                <div className="event-metas">
                                    {(event.description) && (
                                        <p><span className="event-meta">Description:</span> {event.description}</p>
                                    )}
                                    <p><span className="event-meta">Place:</span> {event.place.name}</p>
                                    <p><span className="event-meta">Date:</span> {moment(event.start_time).format('MMMM Do YYYY [at] h:mm:ss a')}</p>
                                </div>
                            </div>
                        })}
                    </div>
                    <hr/>
                    <div className="posts">
                        {this.props.doc.data.posts.map(post => {
                            return <div className="post">
                                <p className="post-body">{post.message}</p>
                                <p className="post-meta">{moment(post.created_time).fromNow()}</p>
                            </div>
                        })}
                    </div>
                    <hr/>
                    {(cta) && (
                        <div className="cta">
                            <a className="button" href={cta.web_url}>{(cta.type == 'CONTACT_US') && 'Contact us'}</a>
                        </div>    
                    )}
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
