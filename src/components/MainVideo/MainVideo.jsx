import "./MainVideo.scss";
import React from "react";

const MainVideo = ({ videoData }) => {
  const { id, image, video: videoSrc } = videoData;
  const baseUrl = import.meta.env.VITE_API_URL;
  const imageUrl = `${baseUrl}/${image}`;

  return (
    <div className="main__video">
      <video className="main__video--player" controls poster={imageUrl}>
        <source src={`${baseUrl}/videos/${id}`} type="video/mp4" />
      </video>
    </div>
  );
};

export default MainVideo;
