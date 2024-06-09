import React from 'react';
import './NextVideoItem.scss';

const NextVideoItem = ({ id, title, image, channel, onSelectVideo, currentVideoId }) => {
    const handleClick = () => {
      onSelectVideo(id);
    }
  
    let videoNavCssClass = "video-nav-item";
  
    if (id === currentVideoId) {
      videoNavCssClass += " video-nav-item--selected";
    }
  
    return (
      <li className={videoNavCssClass} onClick={handleClick}>
        <img className="videoNavCssClass__thumbnail"src={image} alt="next video image"/>
        <h2>{title}</h2>
        <h3>{channel}</h3>
      </li>
    );
  };
  
  export default NextVideoItem;