import React, { useState } from "react";
import videoData from "./data/video-details.json";
import Navbar from "./components/Navbar/Navbar.jsx";
import MainVideo from "./components/MainVideo/MainVideo.jsx";
import "../HomePage/HomePage.scss";
import VideoDetails from "./components/VideoDetails/VideoDetails.jsx";
import NextVideo from "./components/NextVideo/NextVideo.jsx";
import Comment from "./components/Comment/Comment.jsx";
import CommentForm from "./components/CommentForm/CommentForm.jsx";

function HomePage() {
  const [currentVideo, setCurrentVideo] = useState(videoData[0]);

  const selectVideo = (videoId) => {
    console.log("current", currentVideo.id);
    const selectedVideo = videoData.find((video) => {
      return video.id === videoId;
    });
    console.log("select", selectedVideo);
    setCurrentVideo(selectedVideo);
  };

  return (
    <>
      <div>
        <Navbar />
        <MainVideo videoData={currentVideo} />
        <div className="outer-container">
          <div className="container-left">
            <VideoDetails videoData={currentVideo} />
            <CommentForm />
            <Comment comments={currentVideo.comments} />
          </div>

          <div className="container-right">
            <h2 className="video-nav-item__header">NEXT VIDEO</h2>

            <NextVideo
              currentVideoId={currentVideo.id}
              videoData={videoData}
              onSelectVideo={selectVideo}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
