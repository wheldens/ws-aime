import React, {Component} from 'react';
import YouTube from 'react-youtube';
import PropTypes from 'prop-types';

class VideoPlayer extends Component {

    render() {

        const opts = {
            height: '390',
            width: '100%',
            playerVars: {
                autoplay: 0,
                frameborder: 0,
                modestbranding: 0,
                showinfo: 0,
                controls: 0,
                rel: 0
            }
        };

        return (
            <div className="mb-4">
                <YouTube
                    videoId={this.props.videoId}
                    opts={opts}
                    onReady={this._onReady}
                />
            </div>
        );
    }
    }

    VideoPlayer
.
    propTypes = {};

    export
    default
    VideoPlayer;
