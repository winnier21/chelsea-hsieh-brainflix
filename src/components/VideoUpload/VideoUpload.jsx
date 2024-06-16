import React from 'react';
import videoThumbnail from '../../assets/Images/Upload-video-preview.jpg';
import uploadIcon from '../../assets/Icons/upload.svg';


const VideoUpload = () => {
    return (
      <div class="upload-video">
        <h1>Upload Video</h1>
        <h2>Video Thumbnail</h2>
        <img className="thumbnail" src={videoThumbnail} alt="video Thumbnail" />
        <div class="titleVideo">
          <h2>TITLE YOUR VIDEO</h2>
          <div class="video-title">
            <input
              id="video-title"
              type="text"
              placeholder="Add a title to your video"
            />
          </div>
        </div>
        <div class="titleVideo">
          <h2>TITLE YOUR VIDEO</h2>
          <div class="video-description">
            <input
              id="video-description"
              type="text"
              placeholder="Add a discription to your video"
            />
          </div>
        </div>
  
        <div class="publish">
          <button className="upload-button">
            <img className="publish-icon" src={uploadIcon} alt="publish Icon" />
            PUBLISH
          </button>
          <button className="cancel-button">
            CANCEL
          </button>
        </div>
        <hr className="divider" />
      </div>
      
    );
  };
export default VideoUpload