import React, { useState, useEffect } from "react";
import { ref, listAll, getDownloadURL } from "firebase/storage"; 
import { storage } from "../utils/firebase";


const Gallery = ({ gameId }) => {
  const [imageUrls, setImageUrls] = useState([]);

  useEffect(() => {
    const listRef = ref(storage, `games/images/${gameId}`);

    listAll(listRef)
      .then((result) => {
        const urls = [];
        result.items.forEach((itemRef) => {
          getDownloadURL(itemRef).then((url) => {
            urls.push(url);
            setImageUrls([...urls]);
          });
        });
      })
      .catch((error) => {
        console.error("Error listing images: ", error);
      });
  }, [gameId]);

  return (
    <div className="grid grid-cols-3 gap-4">
      {imageUrls.map((url, index) => (
        <div key={index}>
          <img src={url} alt={`${index}`} className="w-full h-auto" />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
