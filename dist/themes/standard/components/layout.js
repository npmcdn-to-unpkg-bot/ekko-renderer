'use strict';

var React = require('react');
var moment = require('moment');

var Standard = React.createClass({
    displayName: 'Standard',


    render: function render() {
        if (!this.props.doc) {
            return null;
        }
        var styles = {
            backgroundImage: 'linear-gradient(\n                                  rgba(0,0,0,0.15),\n                                  rgba(0,0,0,0.7)\n                              ),\n                              url(' + this.props.doc.data.cover.source + ')'
        };
        var cta = this.props.doc.data.call_to_actions[0];
        return React.createElement(
            'div',
            null,
            React.createElement(
                'header',
                { style: styles, className: 'hero' },
                React.createElement(
                    'h1',
                    null,
                    this.props.doc.data.name
                ),
                React.createElement('img', { className: 'profile-picture', src: this.props.doc.data.picture.url })
            ),
            React.createElement(
                'main',
                null,
                React.createElement(
                    'h2',
                    { className: 'desc' },
                    this.props.doc.data.about
                ),
                React.createElement(
                    'div',
                    { className: 'events' },
                    this.props.doc.data.events.map(function (event) {
                        return React.createElement(
                            'div',
                            { className: 'event' },
                            React.createElement(
                                'div',
                                { className: 'event-cover' },
                                React.createElement('img', { src: event.cover.source, alt: '' })
                            ),
                            React.createElement(
                                'h3',
                                { className: 'event-name' },
                                event.name
                            ),
                            React.createElement(
                                'div',
                                { className: 'event-metas' },
                                event.description && React.createElement(
                                    'p',
                                    null,
                                    React.createElement(
                                        'span',
                                        { className: 'event-meta' },
                                        'Description:'
                                    ),
                                    ' ',
                                    event.description
                                ),
                                React.createElement(
                                    'p',
                                    null,
                                    React.createElement(
                                        'span',
                                        { className: 'event-meta' },
                                        'Place:'
                                    ),
                                    ' ',
                                    event.place.name
                                ),
                                React.createElement(
                                    'p',
                                    null,
                                    React.createElement(
                                        'span',
                                        { className: 'event-meta' },
                                        'Date:'
                                    ),
                                    ' ',
                                    moment(event.start_time).format('MMMM Do YYYY [at] h:mm:ss a')
                                )
                            )
                        );
                    })
                ),
                React.createElement('hr', null),
                React.createElement(
                    'div',
                    { className: 'posts' },
                    this.props.doc.data.posts.map(function (post) {
                        return React.createElement(
                            'div',
                            { className: 'post' },
                            React.createElement(
                                'p',
                                { className: 'post-body' },
                                post.message
                            ),
                            React.createElement(
                                'p',
                                { className: 'post-meta' },
                                moment(post.created_time).fromNow()
                            )
                        );
                    })
                ),
                React.createElement('hr', null),
                React.createElement(
                    'div',
                    { className: 'cta' },
                    React.createElement(
                        'a',
                        { className: 'button', href: cta.web_url },
                        cta.type == 'CONTACT_US' && 'Contact us'
                    )
                ),
                React.createElement(
                    'div',
                    { className: 'photo-grid' },
                    this.props.doc.data.photos.map(function (photo) {
                        var image = photo.images.length ? photo.images[0] : null;
                        if (!image) {
                            return null;
                        }
                        return React.createElement('img', { src: image.source });
                    })
                )
            )
        );
    }

});

module.exports = Standard;