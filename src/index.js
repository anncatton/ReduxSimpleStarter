/* @flow */

import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import YTSearch from 'youtube-api-search'

import SearchBar from './components/searchBar'
import VideoList from './components/VideoList'
import VideoDetail from './components/VideoDetail'

const API_KEY = 'AIzaSyBYOABYW7IcTfl8Md-UnUqjDAzK3JsOGB8'

type State = {
  videos: Array<string>,
  selectedVideo: string|null
}

type Props = {

}

class App extends Component<void, Props, State> {

  props: Props
  state: State

  constructor(props) {
    super(props)
    this.state = {
      videos: [],
      selectedVideo: null
    }
    YTSearch({ key: API_KEY, term: 'tigers' }, (videos) => {
      console.log(videos)
      this.setState({
        videos,
        selectedVideo: videos[0]
      })
    })
  }
  render() {
    const { videos, selectedVideo } = this.state
    console.log(videos)
    return (
      <div>
        <SearchBar />
        <VideoDetail video={selectedVideo} />
        <VideoList onVideoSelect={selectedVideo => this.setState({ selectedVideo })} videos={videos} />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector("#app"))
