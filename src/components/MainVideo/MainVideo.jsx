import React from "react";
import "./MainVideo.scss";

const MainVideo = ({ videoData }) => {
  const { id, image, video: videoSrc } = videoData;

  return (
    <div className="main__video">
      <video className="main__video--player" controls poster={image}>
        <source src={videoSrc} type="video/mp4" />
      </video>
    </div>
  );
};

export default MainVideo;
