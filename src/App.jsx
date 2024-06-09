import React, { useState } from "react";
import videoData from "./data/video-details.json";
import Navbar from "./components/Navbar/Navbar.jsx";
import MainVideo from "./components/MainVideo/MainVideo.jsx";
import "../src/App.scss";
import VideoDetails from "./components/VideoDetails/VideoDetails.jsx";
import NextVideo from "./components/NextVideo/NextVideo.jsx";
import Comment from './components/Comment/Comment.jsx';
import CommentForm from './components/CommentForm/CommentForm.jsx';

function App() {
  const [currentVideo, setCurrentVideo] = useState(videoData[0]);

  const selectVideo = (videoId) => {
    console.log ('current', currentVideo.id);
    const selectedVideo = videoData.find((video) => {
      return video.id === videoId
    });
    console.log('select', selectedVideo);
    setCurrentVideo(selectedVideo);
  };

  return (
    <>
    <div>
      <Navbar />
      <MainVideo videoData={currentVideo} />
      <VideoDetails videoData={currentVideo} />
      <CommentForm />
      <Comment comments={currentVideo.comments}/>
      <NextVideo 
          currentVideoId={currentVideo.id}
          videoData={videoData}
          onSelectVideo={selectVideo}
          
        />

    </div>
    </>
  );
};

export default App;

