import "./VideoPage.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { API_URL, API_KEY } from "../../utils/api.jsx";

import MainVideo from "../../components/MainVideo/MainVideo.jsx";

import VideoDetails from "../../components/VideoDetails/VideoDetails.jsx";
import Comment from "../../components/Comment/Comment.jsx";
import CommentForm from "../../components/Comment/CommentForm.jsx";

const VideoPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedVideoId, setSelectedVideoId] = useState("");
  const [selectedVideo, setSelectedVideo] = useState([]);
  const [videos, setVideos] = useState([]);
  const { videoId } = useParams();

  const getVideos = async () => {
    try {
      const response = await axios.get(`${API_URL}/videos?api_key=${API_KEY}`);
      setVideos(response.data);
      setSelectedVideoId(videoId || response.data[0].id);
      setIsLoading(false);
    } catch (error) {
      setError(
        "An error occurred while fetching videos. Please try again." + { error }
      );
    }
  };

  const fetchVideoDetails = async () => {
    try {
      const response = await axios.get(
        `${API_URL}/videos/${selectedVideoId}?api_key=${API_KEY}`
      );
      setSelectedVideo(response.data);
    } catch (error) {
      setError(
        "An error occurred while fetching video details. Please try again." +
          { error }
      );
    }
  };

  const handleCommentSubmit = async (comment) => {
    try {
      await axios.post(
        `${API_URL}/videos/${videoId}/comments?api_key=${API_KEY}`,
        comment
      );
      fetchVideoDetails();
    } catch (error) {
      setError(
        "We could not post comment at this time. Please try again." + { error }
      );
    }
  };

  const handleDeleteComment = async (commentId) => {
    try {
      await axios.delete(
        `${API_URL}/videos/${videoId}/comments/${commentId}?api_key=${API_KEY}`
      );
      fetchVideoDetails();
    } catch (error) {
      setError(
        "We could not delete comment at this time. Please try again." +
          { error }
      );
    }
  };

  useEffect(() => {
console.log("runnning");
    getVideos();
  }, [videoId]);

  useEffect(() => {
    if (selectedVideoId) {
      fetchVideoDetails();
    }
  }, [selectedVideoId]);

  if (error) {
    return <p>{error}</p>;
  }

  const filteredVideos = videos.filter((video) => video.id !== selectedVideoId);

  return (
    <>
      <main>
        <section>
          <div>
            <VideoDetails video={selectedVideo} isLoading={isLoading} />
            <Comment
              comments={selectedVideo.comments}
              isLoading={isLoading}
              handleCommentSubmit={handleCommentSubmit}
              handleDeleteComment={handleDeleteComment}
            />
          </div>
          <aside>
            <p>NEXT VIDEOS</p>
            <div>
              {isLoading
                ? Array(3)
                    .fill()
                    .map((_, i) => <MainVideo key={i} isLoading={isLoading} />)
                : filteredVideos.map((video) => (
                    <div key={video.id}>
                      <Link to={`/video/${video.id}`}>
                        <MainVideo
                          video={video}
                          id={video.id}
                          isLoading={isLoading}
                        />
                      </Link>
                    </div>
                  ))}
            </div>
          </aside>
        </section>
      </main>
    </>
  );
};

export default VideoPage;
