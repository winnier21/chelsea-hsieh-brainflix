import React from "react";
import "./NextVideo.scss";
import NextVideoItem from "../NextVideoItem/NextVideoItem";

const NextVideo = ({ onSelectVideo, videoData, currentVideoId }) => {
  return (
    <ul>
      {videoData.map((video) => {
        return (
          <NextVideoItem 
          key={video.id}
          id={video.id}
          image={video.image}
          title={video.title}
          channel={video.channel}
          onSelectVideo={onSelectVideo}
          currentVideoId={currentVideoId}
           />
        );
      })}
    </ul>
  );
};

export default NextVideo;
/* //  
          
          <li className="next-video__item">
            
            <h2>{video.title}</h2>
            <h3>{video.channel}</h3>
          </li>          //  */
