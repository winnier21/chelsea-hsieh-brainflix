import "./MainVideo.scss";
// import { API_URL, API_KEY } from "../../utils/api.jsx";
import React from "react";

const MainVideo = ({ videoData }) => {
  const { id, image, video: videoSrc } = videoData;
  const baseUrl = import.meta.env.VITE_API_URL;
  return (
    <div className="main__video">
      <video className="main__video--player" controls poster={image}>
        <source src={`${baseUrl}/videos/${id}`} type="video/mp4" />
      </video>
    </div>
  );
};

export default MainVideo;
