import React from "react";
import "./NextVideo.scss";
import NextVideoItem from "../NextVideoItem/NextVideoItem";
import { Link } from "react-router-dom";

const NextVideo = ({ onSelectVideo, videoData, currentVideoId }) => {
  return (
    <ul className="nextVideo--list">
      {videoData.map((video) => {
        return (
          <Link key={video.id} to={`/videos/${video.id}`}>
            <NextVideoItem
              key={video.id}
              id={video.id}
              image={video.image}
              title={video.title}
              channel={video.channel}
              onSelectVideo={onSelectVideo}
              currentVideoId={currentVideoId}
            />
          </Link>
        );
      })}
    </ul>
  );
};

export default NextVideo;
