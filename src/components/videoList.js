import React from 'react'

import VideoListItem from './VideoListItem'

const VideoList = (props) => {
  const { videos, onVideoSelect } = props
  return (
    <ul className='col-md-4 list-group'>
      { videos.map((video) => {
        return (
          <VideoListItem
            key={video.etag}
            video={video}
            onVideoSelect={onVideoSelect}
          />
        )
      }) }
    </ul>
  )
}


export default VideoList
