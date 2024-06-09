import React from "react";
import "./NextVideo.scss";

const NextVideo = ({ onSelectVideo, videoData, selectedVideoId }) => {
  return (
    <ul>
      {videoData.map((video) => {
        return (
          // key={video.id}
          // id={video.id}
          <li>
            <img className="nextVideo__thumbnails" src={video.image}></img>
            <h2>{video.title}</h2>
            <h3>{video.channel}</h3>
          </li>
        );
      })}
    </ul>
  );
};

export default NextVideo;
/* // onSelectVideo={onSelectVideo}
                    // selectedVideoId={selectedVideoId} */
