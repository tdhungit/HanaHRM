import React, {Component} from 'react';
import {Meteor} from 'meteor/meteor';
// import PropTypes from 'prop-types';
import container from '/imports/common/Container';
import Media from '/imports/collections/Media/Media';

class ImageTagClass extends Component {
    render() {
        const {
            id,
            src,
            alt,
            className
        } = this.props;

        return (
            <img src={src} id={id} className={className} alt={alt}/>
        );
    }
}
ImageTagClass.defaultProps = {
    id: '',
    media: '',
    src: Meteor.absoluteUrl('img/avatars/6.jpg'),
    alt: '',
    className: 'rounded'
};
const ImageTag = container((props, onData) => {
    const mediaId = props.media;
    if (mediaId) {
        const subscription = Meteor.subscribe('media.detail', mediaId);
        if (subscription && subscription.ready()) {
            const media = Media.findOne(mediaId);
            if (media) {
                onData(null, {
                    src: media.link()
                });
            }
        }
    }
}, ImageTagClass);

export {
    ImageTag
};
