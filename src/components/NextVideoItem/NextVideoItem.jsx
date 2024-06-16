import React from "react";
import "./NextVideoItem.scss";

const NextVideoItem = ({
  id,
  title,
  image,
  channel,
  onSelectVideo,
  currentVideoId,
}) => {
  // const handleClick = () => {
  //   onSelectVideo(id);
  // };

  let videoNavCssClass = "video-nav-item";

  if (id === currentVideoId) {
    videoNavCssClass += " video-nav-item--selected";
  }

  return (
    <li className={videoNavCssClass} >
      <img
        className="videoNavCssClass__thumbnail"
        src={image}
        alt="next video image"
      />
      <div className="video-nav-item__container">
        <h2 className="video-nav-item__title">{title}</h2>
        <h3 className="video-nav-item__channel">{channel}</h3>
      </div>
    </li>
  );
};

export default NextVideoItem;

// onClick={handleClick}