import "./MainVideo.scss";
import { API_URL, API_KEY } from "../../utils/api.jsx";
import React from "react";

const MainVideo = ({ videoData }) => {
  const { id, image, video: videoSrc } = videoData;

  return (
    <div className="main__video">
      <video className="main__video--player" controls poster={image}>
        <source src={`${API_URL}/videos/${id}${API_KEY}`} type="video/mp4" />
      </video>
    </div>
  );
};

export default MainVideo;
