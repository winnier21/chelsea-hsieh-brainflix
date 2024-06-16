import React, { useState, useEffect } from "react";
import MainVideo from "../../components/MainVideo/MainVideo.jsx";
import "../HomePage/HomePage.scss";
import VideoDetails from "../../components/VideoDetails/VideoDetails.jsx";
import NextVideo from "../../components/NextVideo/NextVideo.jsx";
import Comment from "../../components/Comment/Comment.jsx";
import CommentForm from "../../components/CommentForm/CommentForm.jsx";
import { API_URL, API_KEY } from "../../utils/api.jsx";
import { useParams } from "react-router-dom";
import axios from "axios";

function HomePage() {
 
  const [videoData, setVideoData] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const { videoId } = useParams();

  useEffect(() => {
    const getVideos = async () => {
      try {
        const res = await axios.get(`${API_URL}/videos${API_KEY}`);

        const videoData = res.data;
        setVideoData(videoData);

        // Set the initial selected video if videoId is not provided in the URL
        if (!videoId) {
          setSelectedVideo(videoData[0]);
        }
      } catch (error) {
        console.log("Error fetching videos:", error);
      }
    };

    getVideos();
  }, [videoId]);

  useEffect(() => {
    const getSelectedVideo = async (videoId) => {
      try {
        const res = await axios.get(`${API_URL}/videos/${videoId}${API_KEY}`);
        const selectedVideo = res.data;
        
        //console.log(res.data)
       
        setSelectedVideo(selectedVideo);
      } catch (error) {
        console.log("Error fetching selected video:", error);
      }
    };

    if (videoId) {
      getSelectedVideo(videoId);
    }
  }, [videoId]);

  if (videoData.length === 0) {
    return <p>Loading...</p>;
  }

  const currentVideo = selectedVideo || videoData[0].id; // Use selectedVideo if available, otherwise default to the first video


  const filteredVideoData = videoData.filter((video) => video.id !== currentVideo.id);
  //console.log(selectedVideo.comments)

  return (
    <>
      <div>
        <MainVideo videoData={currentVideo} />
        <div className="outer-container">
          <div className="container-left">
            <VideoDetails videoData={selectedVideo.id} />
            <CommentForm />
            {/* <Comment comments={currentVideo.comments} /> */}
            <Comment getComment={selectedVideo.id} />
          </div>

          <div className="container-right">
            <h2 className="video-nav-item__header">NEXT VIDEO</h2>

            <NextVideo
              currentVideoId={currentVideo.id}
              videoData={filteredVideoData} // Pass filteredVideoData instead of videoData
              onSelectVideo={(videoId) => setSelectedVideo(videoData.find((video) => video.id === videoId))}
            />
          </div>
        </div>
      </div>
    </>
  );
}


export default HomePage;

