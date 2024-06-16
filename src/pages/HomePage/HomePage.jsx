// import React, { useState, useEffect } from "react";
// //import videoData from "../../data/video-details.json";
// import MainVideo from "../../components/MainVideo/MainVideo.jsx";
// import "../HomePage/HomePage.scss";
// import VideoDetails from "../../components/VideoDetails/VideoDetails.jsx";
// import NextVideo from "../../components/NextVideo/NextVideo.jsx";
// import Comment from "../../components/Comment/Comment.jsx";
// import CommentForm from "../../components/CommentForm/CommentForm.jsx";
// import { API_URL, API_KEY } from "../../utils/api.jsx";
// import { useParams } from "react-router-dom";
// import axios from "axios";

// function HomePage() {
//   // const [currentVideo, setCurrentVideo] = useState(videoData[0]);

//   const [videoData, setVideoData] = useState([]);
//   const [selectedVideo, setSelectedVideo] = useState(null);
//   const { videoId } = useParams();

//   const getVideos = async () => {
//     try {
//       const res = await axios.get(API_URL + "/videos/" + API_KEY);
//       const vidoeList = res.data;
//       setVideoData (videoData);
//       setSelectedVideo (videoData[0]);

//       if (!videoId){
//         const initialVideoId = videoData [0].id;
//       getSelectedVideo(initialVideoId);
//           }
//     }catch (error){
//       console.log (error);
//     }
  


//   const getSelectedVideo = async (videoId) => {
//     try {
//       const res = await axios.get(`API_URL/videos/${videoId}API_KEY`);
//       const selectedVideo = res.data;
//       console.log(selectedVideo);
//       setSelectedVideo(selectedVideo);

//     } catch (err) {
//       console.log("pewpew" + err);
//     }
//   };

//   useEffect(() => {
//     getVideos();
//   }, []);

//   useEffect(() => {
//     if (videoId) {
//       getSelectedVideo(videoId);
//     }

//   }, [videoId]);



//   if (videoData.length < 1) {
//     return <p>loading...</p>;
//   }

// const currentVideo = selectedVideo || videoData[0].id;

//   const filteredVideoData = videoData.filter((video) => {
//     return video.id != selectedVideo.id;
//   });

  
//   return (
//     <>
//       <div>
//         <MainVideo videoData={currentVideo} />
//         <div className="outer-container">
//           <div className="container-left">
//             <VideoDetails videoData={currentVideo} />
//             <CommentForm />
//             <Comment comments={currentVideo.comments} />
//           </div>

//           <div className="container-right">
//             <h2 className="video-nav-item__header">NEXT VIDEO</h2>

//             <NextVideo
//               currentVideoId={currentVideo.id}
//               videoData={filteredVideoData} // Pass filteredVideoData instead of videoData
//               onSelectVideo={(videoId) => setSelectedVideo(videoData.find((video) => video.id === videoId))}
//             />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
// }
// export default HomePage

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
  

  return (
    <>
      <div>
        <MainVideo videoData={currentVideo} />
        <div className="outer-container">
          <div className="container-left">
            <VideoDetails videoData={selectedVideo.id} />
            <CommentForm />
            <Comment comments={selectedVideo.comments} />
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

