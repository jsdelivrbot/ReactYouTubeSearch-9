import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
  //Below is the same as the {video} above
  // const video= props.video;
  const imageUrl = video.snippet.thumbnails.default.url;
  const videoTitle = video.snippet.title
  return(
    <li onClick={() => onVideoSelect(video)} className='list-group-item'>
      <div className='video-list media'>
        <div className='media-left'>
          <img src={imageUrl} className='media-object' />
        </div>
        <div className='media-body'>
          <div className='media-heading'>{videoTitle}</div>
        </div>
      </div>
    </li>
  )
};

export default VideoListItem;
