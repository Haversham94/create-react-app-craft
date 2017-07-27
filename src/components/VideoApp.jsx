import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import VideoDetail from './VideoDetail.jsx';
import SearchBar from './SearchBar.jsx';
import VideoList from './VideoList.jsx';
import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyB6uYbIOXFV371IszqxOSh9-KEosNK_3TQ';

class VideoApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videos: [],
            selectedVideo: null
        };

        this.searchVideo('funnycats');

    }
    searchVideo(term) {
        YTSearch({ key: API_KEY, term: term }, videos => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });

        });
    }

    render() {
        const videoSearch = _.debounce((term) => {
            this.searchVideo(term)
        }, 300);
        return (
            <div>
                <SearchBar onSearchTermChange={videoSearch} />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList
                    onVideoSelect={ selectedVideo => {this.setState({selectedVideo})} }
                    videos={this.state.videos} />
            </div>

        );
    }
}
export default VideoApp;
