import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

import SearchBar from './components/search_bar';
import VideoLists from './components/video_lists';
import VideoInfo from './components/video_info';

//youtube API key for searching
const API_KEY = 'AIzaSyDgVnFlqf503C3U2KczhNan59jGA-my8vM';

class App extends Component {
    constructor(props){
        super(props);

        this.state= {videos:[], selectedVideo: null};
        this.videoSearch('kerala');
    }

    videoSearch(term){
        // Executing youtube search using youtube key
        YTSearch({key: API_KEY, term:term}, (videos) => {
            this.setState({ videos: videos,
                            selectedVideo: videos[0] });
        });
    }

    render() {
        const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300 );

        // adding videos as porps to the videolists component.
        return(
            <div>
                <SearchBar onSearchTermChange={ videoSearch }/>
                <VideoInfo video={this.state.selectedVideo} />
                <VideoLists 
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                    videos={this.state.videos}/>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.querySelector('.container'));