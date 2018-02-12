import React from 'react';

// the below line takes up the parameter video and identify it as the item inside.
const VideoItem = ({video, onVideoClick}) => {
    const imgURL = video.snippet.thumbnails.default.url;
    return (
        <li onClick={() => onVideoClick(video)} className="list-group-item"> 
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object" src={imgURL}/>
                </div>
                <div className="media-body">
                    <div className="media-heading">
                        {video.snippet.title}
                    </div>
                </div>
            </div>
        </li>
    );
};

export default VideoItem;