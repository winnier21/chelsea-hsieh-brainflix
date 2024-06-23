import React, { useState, useEffect } from "react";
import MainVideo from "../../components/MainVideo/MainVideo.jsx";
import "../HomePage/HomePage.scss";
import VideoDetails from "../../components/VideoDetails/VideoDetails.jsx";
import NextVideo from "../../components/NextVideo/NextVideo.jsx";
import Comment from "../../components/Comment/Comment.jsx";
import CommentForm from "../../components/CommentForm/CommentForm.jsx";
import { useParams } from "react-router-dom";
import axios from "axios";

function HomePage() {
  const [videoData, setVideoData] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const { videoId } = useParams();
  const baseUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const getVideos = async () => {
      try {
        const res = await axios.get(`${baseUrl}/videos`);
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
  }, [baseUrl, videoId]);

  useEffect(() => {
    const getSelectedVideo = async (videoId) => {
      try {
        const res = await axios.get(`${baseUrl}/videos/${videoId}`);
        const selectedVideo = res.data;

        setSelectedVideo(selectedVideo);
      } catch (error) {
        console.log("Error fetching selected video:", error);
      }
    };

    if (videoId) {
      getSelectedVideo(videoId);
    }
  }, [baseUrl, videoId]);

  if (videoData.length === 0 || !selectedVideo) {
    return <p>Loading...</p>;
  }

  const currentVideo = selectedVideo || videoData[0]; // Use selectedVideo if available, otherwise default to the first video

  const filteredVideoData = videoData.filter(
    (video) => video.id !== currentVideo.id
  );

  return (
    <>
      <main>
        <MainVideo videoData={currentVideo} />
        <section className="outer-container">
          <div className="container-left">
            {selectedVideo && (
              <>
                <VideoDetails videoData={selectedVideo} />
                <CommentForm />
                <Comment getComment={selectedVideo.id} />
              </>
            )}
          </div>

          <div className="container-right">
            <h2 className="video-nav-item__header">NEXT VIDEO</h2>

            <NextVideo
              currentVideoId={currentVideo.id}
              videoData={filteredVideoData} // Pass filteredVideoData instead of videoData
              onSelectVideo={(videoId) =>
                setSelectedVideo(
                  videoData.find((video) => video.id === videoId)
                )
              }
            />
          </div>
        </section>
      </main>
    </>
  );
}

export default HomePage;
