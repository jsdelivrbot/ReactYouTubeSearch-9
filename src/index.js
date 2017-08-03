import _ from 'lodash';
import React, { Component } from 'react';
import ReactDom from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_details';
const API_KEY = 'AIzaSyBkeRDi9ZskajXhTZZ-W1JRHZiiIypIiFg';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('ReactJS');
  }

  videoSearch(term){
    YTSearch({key:API_KEY, term:term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
      // is the same as (key, prop is the same name)
      //this.setState({ videos: videos });
    });
  }

  videoSelect(selectedVideo) {
    this.setState({selectedVideo})
  }

  render() {

    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300)

    return(
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          videoSelect={this.onVideoSelect}
          videos={this.state.videos} />
      </div>
    )
  }
}


ReactDom.render(<App />, document.querySelector('.container'));
