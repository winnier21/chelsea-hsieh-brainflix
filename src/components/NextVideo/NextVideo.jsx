import React from 'react';
import './NextVideo.scss';


const NextVideo = ({ onSelectVideo, videoData, selectedVideoId }) => {

    return (
        <ul>
            {videoData.map((video) => {
            return (
                // key={video.id}
                // id={video.id}
                <li>
                    <img className ="nextVideo__thumbnails" src={video.image} ></img>
                    title={video.title}
                    channel={video.channel}
                    // onSelectVideo={onSelectVideo}
                    // selectedVideoId={selectedVideoId}
                </li>
            )
            })}

        </ul>
    
        
  );
};


export default NextVideo