import React, { useState } from 'react';
import axios from 'axios';

const ImageUpload = () => {
  const [image, setImage] = useState(null); // stores the selected file
  const [url, setUrl] = useState(''); // stores the uploaded image URL

  // Called when the user selects a file
  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  // Called when the user clicks "Upload"
  const handleUpload = async () => {
    if (!image) return alert('Please select an image');

    const formData = new FormData();
    formData.append('file', image);
    formData.append('upload_preset', 'ml_default'); // your unsigned preset

    // Debug: log what is being sent
    for (let pair of formData.entries()) {
      console.log(pair[0] + ':', pair[1]);
    }

    try {
      const response = await axios.post(
        'https://api.cloudinary.com/v1_1/djlmoo1za/image/upload', // your Cloud Name
        formData
      );

      console.log('Cloudinary response:', response.data); // debug response
      setUrl(response.data.secure_url); // save uploaded image URL
      alert('Upload successful!');
    } catch (error) {
      console.error('Upload error:', error);
      alert('Upload failed. Check console for details.');
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px' }}>
      <h2>Upload Image</h2>
      <input type="file" onChange={handleImageChange} style={{ marginBottom: '10px' }} />
      <button onClick={handleUpload} style={{ marginBottom: '20px' }}>Upload</button>

      {url && (
        <div style={{
          border: '1px solid #ccc',
          borderRadius: '10px',
          padding: '10px',
          width: '250px',
          textAlign: 'center',
          boxShadow: '2px 2px 10px rgba(0,0,0,0.2)',
          position: 'relative'
        }}>
          <p>Uploaded Image:</p>
          <img src={url} alt="Uploaded" style={{ width: '100%', borderRadius: '5px' }} />
          <span style={{
            position: 'absolute',
            top: '5px',
            right: '10px',
            fontSize: '12px',
            color: '#555'
          }}>Cloudinary</span>
        </div>
      )}
    </div>
  );
};

export default ImageUpload;