
import React, { useState } from 'react';
import videoThumbnail from '../../assets/Images/Upload-video-preview.jpg';
import uploadIcon from '../../assets/Icons/publish.svg';


const VideoUpload = ({ handleFormSubmit }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  return (
    <div className="upload">
      <h1>Upload Video</h1>
      <div className ="upload__wrapper">
      <div className ="upload__wrapper--left">
      <h2>Video Thumbnail</h2>
      <img className="upload__thumbnail" src={videoThumbnail} alt="Video Thumbnail" />
      </div>

      
     
      <div className="upload__wrapper--right">
      <div>
          <h2>TITLE YOUR VIDEO</h2>
          <div className="upload__title">
            <input
              id="video-title"
              type="text"
              placeholder="Add a title to your video"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
        </div>

        <div>
          <h2>ADD A VIDEO DESCRIPTION</h2>
          <div className="upload__description">
            <textarea
              id="video-description"
              type="text"
              placeholder="Add a description to your video"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
        </div>
      </div>
      </div>
      <form onSubmit={(e) => handleFormSubmit(e, { title, description })}>
        <div className="publish">
          <button className="publish__button" type="submit">
            <img className="publish__icon" src={uploadIcon} alt="Publish Icon" />
            <h2>PUBLISH</h2>
          </button>
          <button className="cancel__button" type="button" onClick={() => window.history.back()}>
          <h2>CANCEL</h2>
          </button>
        </div>

      </form>
    </div>
  );
};

export default VideoUpload;
