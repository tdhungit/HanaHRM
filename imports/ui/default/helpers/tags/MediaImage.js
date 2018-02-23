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

        let mediaLink = src;
        if (!mediaLink) {
            mediaLink = Meteor.absoluteUrl('img/avatars/6.jpg')
        }

        return (
            <img src={mediaLink} id={id} className={className} alt={alt}/>
        );
    }
}
ImageTagClass.defaultProps = {
    id: '',
    media: '',
    src: '',
    alt: '',
    className: 'rounded'
};
const ImageTag = container((props, onData) => {
    const mediaId = props.media;
    let mediaLink = '';
    if (mediaId) {
        const subscription = Meteor.subscribe('media.detail', mediaId);
        if (subscription && subscription.ready()) {
            const media = Media.findOne(mediaId);
            if (media) {
                mediaLink = media.link();
            }
        }
    }
    onData(null, {
        src: mediaLink
    });
}, ImageTagClass);

export {
    ImageTag
};
