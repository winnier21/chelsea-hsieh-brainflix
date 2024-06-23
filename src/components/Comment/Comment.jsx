import axios from "axios";
import React, { useState, useEffect } from "react";
// import { API_URL, API_KEY } from "../../utils/api.jsx";
import "./Comment.scss";

const Comment = (testId) => {
  const videoId = testId.getComment;
  const [selectedVideo, setSelectedVideo] = useState(null);
  const baseUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const getComments = async () => {
      try {
        const res = await axios.get(`${baseUrl}/videos/${videoId}`);
        const selectedVideo = res.data;
        console.log(selectedVideo);
        setSelectedVideo(selectedVideo);
      } catch (error) {
        console.log("Error fetching selected video:", error);
      }
    };

    if (videoId) {
      getComments();
    }
  }, [videoId]);

  if (!selectedVideo) {
    return <p>Loading...</p>;
  }

  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    const day = date.getDate();
    const month = date.getMonth() + 1; // Months are zero-indexed
    const year = date.getFullYear();
    return `${month}/${day}/${year}`;
  };
  return (
    <main>
      {selectedVideo.comments.map((comment) => (
        <div key={comment.id} className="comment">
          <div className="comment__avatar"></div>
          <div className="comment__outer">
            <div className="comment__container">
              <p className="comment__name">{comment.name}</p>
              <span className="comment__date">
                {formatDate(comment.timestamp)}
              </span>
            </div>
            <p className="comment__text">{comment.comment}</p>
          </div>
        </div>
      ))}
    </main>
  );
};

export default Comment;
