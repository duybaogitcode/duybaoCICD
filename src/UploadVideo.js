import React, { useState } from 'react';

const UploadVideo = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleVideoChange = (event) => {
    setSelectedVideo(event.target.files[0]);
  };

  const handleUpload = () => {
    if (selectedVideo) {
      const formData = new FormData();
      formData.append('video', selectedVideo);
      console.log(1)
      fetch('https://duybao1302.azurewebsites.net/user', {
        method: 'POST',
        body: formData,
      })
        .then(response => {
          alert('ok');
        })
        .catch(error => {
          // Handle any errors that occurred during the request
        });
    }
  };

  return (
    <div>
      <input type="file" accept="video/*" onChange={handleVideoChange} />
      <button onClick={handleUpload}>Upload Video</button>
    </div>
  );
};

export default UploadVideo;
