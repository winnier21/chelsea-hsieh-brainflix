// import React from 'react';
// import videoThumbnail from '../../assets/Images/Upload-video-preview.jpg';
// import uploadIcon from '../../assets/Icons/publish.svg';


// const VideoUpload = () => {
//     return (
//       <div class="upload">
//         <h1>Upload Video</h1>
//         <h2>Video Thumbnail</h2>
//         <img className="upload__thumbnail" src={videoThumbnail} alt="video Thumbnail" />
//         <div class="titleVideo">
//           <h2>TITLE YOUR VIDEO</h2>
//           <div class="upload__title">
//             <input
//               id="video-title"
//               type="text"
//               placeholder="Add a title to your video"
//             />
//           </div>
//         </div>
//         <div class="titleVideo">
//           <h2>ADD A VIDEO DESCRIPTION</h2>
//           <div class="upload__description">
//             <input
//               id="video-description"
//               type="text"
//               placeholder="Add a discription to your video"
//             />
//           </div>
//         </div>
  
//         <div class="publish">
//           <button className="publish__button">
//             <img className="publish__icon" src={uploadIcon} alt="publish Icon" />
//             PUBLISH
//           </button>
//           <button className="cancel__button">
//             CANCEL
//           </button>
//         </div>
//         <hr className="divider" />
//       </div>
      
//     );
//   };
// export default VideoUpload
import React, { useState } from 'react';
import videoThumbnail from '../../assets/Images/Upload-video-preview.jpg';
import uploadIcon from '../../assets/Icons/publish.svg';


const VideoUpload = ({ handleFormSubmit }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  return (
    <div className="upload">
      <h1>Upload Video</h1>
      <h2>Video Thumbnail</h2>
      <img className="upload__thumbnail" src={videoThumbnail} alt="Video Thumbnail" />
      <form onSubmit={(e) => handleFormSubmit(e, { title, description })}>
        <div className="titleVideo">
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
        <div className="titleVideo">
          <h2>ADD A VIDEO DESCRIPTION</h2>
          <div className="upload__description">
            <input
              id="video-description"
              type="text"
              placeholder="Add a description to your video"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="publish">
          <button className="publish__button" type="submit">
            <img className="publish__icon" src={uploadIcon} alt="Publish Icon" />
            PUBLISH
          </button>
          <button className="cancel__button" type="button" onClick={() => window.history.back()}>
            CANCEL
          </button>
        </div>
        <hr className="divider" />
      </form>
    </div>
  );
};

export default VideoUpload;
