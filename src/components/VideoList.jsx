import React, { Component } from 'react';
import VideoListItem from './VideoListItem.jsx';

class VideoList extends Component {
    render() {
        return (
            <ul className="col-md-4 list-group">
                { this.props.videos.map((video) => <VideoListItem
                    onVideoSelect={this.props.onVideoSelect}
                    key={video.etag}
                    video={video} />) }
            </ul>
        );
    }
}
export default VideoList;
