import React from 'react';
import VideoItem from './video_item';

const videolist = (props) => {
    const videos = props.videos;

    const videoItems = videos.map((video) => {
        // need to get the unique ID for each item so setting etag there.
        return <VideoItem key={video.etag} onVideoClick={props.onVideoSelect} video={video} />
    });

    return (
        <ul className="col-md-4 list-group"> 
        {videoItems}
        </ul>
    );
}

export default videolist;