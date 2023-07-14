import React, { useEffect, useState } from 'react';
import { ImageList, ImageListItem, ImageListItemBar } from "@mui/material";

const Pictures = (props) => {
  const [imageUrls, setImageUrls] = useState([]);

  // Fetch the image URLs from Google Drive API or spreadsheet
  useEffect(() => {
    // Replace this with your code to retrieve the image URLs dynamically
    const fetchImageUrls = async () => {
      // Example image URLs
      const urls = ['https://drive.google.com/uc?id=1sw9n4FCfNuyZGSgaeql3Dq6Na_QuFDxB', 
                    'https://drive.google.com/uc?id=1sw9n4FCfNuyZGSgaeql3Dq6Na_QuFDxB',
                    'https://drive.google.com/uc?id=1sw9n4FCfNuyZGSgaeql3Dq6Na_QuFDxB',
                    'https://drive.google.com/uc?id=1sw9n4FCfNuyZGSgaeql3Dq6Na_QuFDxB'];
      setImageUrls(urls);
    };

    fetchImageUrls();
  }, []);

  return (
    <div>
      <h1>Image List</h1>
      <ImageList sx={{ width: 500, height: 450 }} variant="masonry" cols={3} gap={8}>
        {imageUrls.map((url) => (
          <ImageListItem key={url}>
            <img src={url} alt="" />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}


export default Pictures;