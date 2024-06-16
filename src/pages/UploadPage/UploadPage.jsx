import React from 'react';
import { useNavigate } from 'react-router-dom';
import VideoUpload from '../../components/VideoUpload/VideoUpload.jsx';
import './UploadPage.scss';

const UploadPage = () => {
  const navigate = useNavigate();

  const handleFormSubmit = (event) => {
    event.preventDefault();
        alert("Your video has been uploaded!");
        navigate('/');
      };

  return (
    <div>
      <VideoUpload handleFormSubmit={handleFormSubmit} />
    </div>
  );
};

export default UploadPage;

