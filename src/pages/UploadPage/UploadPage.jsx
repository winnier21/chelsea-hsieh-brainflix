import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../pages/UploadPage/UploadPage.scss";
import axios from 'axios';
import videoThumbnail from "../../assets/Images/Upload-video-preview.jpg";
import uploadIcon from "../../assets/Icons/publish.svg";



const UploadPage = () => {
 
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const baseUrl = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();
  


    const handleSubmit = async (event) => {
      event.preventDefault();
      const videoObj = {
        title: title ,
        description: description,
        image: "http://localhost:8080/images/image9.jpg"
      };
    try {
     console.log(`${baseUrl}/videos`)
      const response = await axios.post(`${baseUrl}/videos`, videoObj)
      alert("Your video has been uploaded!");
      navigate("/");
      return response;

    } catch (error) {
      console.error("Error uploading video:", error);
      
    }
  };
       
      

  return (
    <main className="upload-page">
      <section className="upload">
      <h1>Upload Video</h1>
      <div className="upload__wrapper">
        <div className="upload__wrapper--left">
          <h2>Video Thumbnail</h2>
          <img
            className="upload__thumbnail"
            src={videoThumbnail}
            alt="Video Thumbnail"
          />
        </div>

        <section className="upload__wrapper--right">
          <div>
            <h2>TITLE YOUR VIDEO</h2>
            <div className="upload__title">
              <input
                id="video-title"
                type="text"
                placeholder="Add a title to your video"
               
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>
          </div>

          <section>
            <h2>ADD A VIDEO DESCRIPTION</h2>
            <div className="upload__description">
              <textarea
                id="video-description"
                placeholder="Add a description to your video"
                
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </div>
          </section>
        </section>
      </div>
      <form onSubmit= {handleSubmit}>
        <div className="publish">
          <button className="publish__button" type="submit">
            <img
              className="publish__icon"
              src={uploadIcon}
              alt="Publish Icon"
            />
            <h2>PUBLISH</h2>
          </button>
          <button
            className="cancel__button"
            type="button"
            onClick={() => window.history.back()}
          >
            <h2>CANCEL</h2>
          </button>
        </div>
      </form>
    </section>
    </main>
  );
};

export default UploadPage
