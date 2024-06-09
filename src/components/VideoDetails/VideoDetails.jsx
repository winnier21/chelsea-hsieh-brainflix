import React from 'react';
import './VideoDetails.scss';
import likesIcon from '../../assets/Icons/likes.svg';
import viewsIcon from '../../assets/Icons/views.svg';


const VideoDetails =({videoData}) => {
    const {title, channel, timestamp, views, likes, description} = videoData;
  return(
    <div className="video-details section-wrapper">
      <h1 className="video-details__title">{title}</h1>
      <div className="video-details__metadata">
        <div className="video-details__metadata--left">
          <div className="video-details__author">
            <p className="video-details__info">By {channel}</p>
          </div>
          <div className="video-details__date">
            <p className="video-details__info">{timestamp}</p>
          </div>
        </div>
        <div className="video-details__metadata--right">
          <div className="video-details__views">
            <img
              className="video-details__icon"
              src={viewsIcon}
              alt="View icon"
            />
            <p className="video-details__info">{views}</p>
          </div>
          <div className="video-details__likes">
            <img
              className="video-details__icon"
              src={likesIcon}
              alt="like icon"
            />
            <p className="video-details__info">{likes}</p>
          </div>
        </div>
      </div>
      <p className="video-details__copy">{description}</p>
    </div>
  );
};


export default VideoDetails