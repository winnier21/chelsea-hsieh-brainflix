import React, { useState } from "react";
import videoData from "./data/video-details.json";
import Navbar from "./components/Navbar/Navbar.jsx";
import MainVideo from "./components/MainVideo/MainVideo.jsx";
import "../src/App.scss";
import VideoDetails from "./components/VideoDetails/VideoDetails.jsx";
import NextVideo from "./components/NextVideo/NextVideo.jsx";

function App() {
  const [currentVideo, setCurrentVideo] = useState(videoData[0]);

  const selectVideo = (videoId) => {
    
    const selectedVideo = videoData.find((video) => video.id === videoId);
    setCurrentVideo(selectedVideo);
  };

  return (
    <>
    <div>
      <Navbar />
      <MainVideo videoData={currentVideo} />
      <VideoDetails videoData={currentVideo} />
      <NextVideo 
          videoData={videoData}
          onSelectVideo={selectVideo}
          selectedVideoId={currentVideo.id}
        />

    </div>
    </>
  );
};

export default App;

