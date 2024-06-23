import "./VideoDetails.scss";
import likesIcon from "../../assets/Icons/likes.svg";
import viewsIcon from "../../assets/Icons/views.svg";
import axios from "axios";
import React, { useState, useEffect } from "react";

const VideoDetails = ({ videoData }) => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const baseUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const getSelectedVideo = async () => {
      try {
        const res = await axios.get(`${baseUrl}/videos/${videoData.id}`);
        const selectedVideo = res.data;
        setSelectedVideo(selectedVideo);
      } catch (error) {
        console.log("Error fetching selected video:", error);
      }
    };

    if (videoData?.id) {
      getSelectedVideo();
    }
  }, [videoData]);

  if (!selectedVideo) {
    return <p>Loading...</p>;
  }

  const { title, channel, timestamp, views, likes, description, comments } =
    selectedVideo;

  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    const day = date.getDate();
    const month = date.getMonth() + 1; // Months are zero-indexed
    const year = date.getFullYear();
    return `${month}/${day}/${year}`;
  };

  return (
    <main className="video-details">
      <h1 className="video-details__title">{title}</h1>
      <section className="video-details__data">
        <div className="video-details__data--left">
          <div className="video-details__creator">
            <p className="video-details__info">By {channel}</p>
          </div>
          <div className="video-details__date">
            <p className="video-details__info">{formatDate(timestamp)}</p>
          </div>
        </div>
        <div className="video-details__data--right">
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
      </section>
      <p className="video-details__description">{description}</p>
      <h2 className="comment-title">{comments.length} Comments</h2>
    </main>
  );
};

export default VideoDetails;
