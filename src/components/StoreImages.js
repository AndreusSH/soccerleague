import React, { useState } from "react";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../utils/firebase";
import ImageValidation from "./ImageValidation";
import { useParams } from "react-router-dom";
import Gallery from "./Gallery";

const StoreImages = () => {
  const [imageUpload, setImageUpload] = useState();
  const { id } = useParams();

  const uploadFile = () => {
    if (!imageUpload) return;

    const imageRef = ref(storage, `games/images/${id}/${imageUpload.name}`);

    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        console.log(url);
      });
    });
  };

  return (
    <div className="App p-4">
      <input
        type="file"
        className="mb-4"
        onChange={(event) => {
          setImageUpload(event.target.files[0]);
        }}
      />
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={uploadFile}
      >
        Upload
      </button>

      <Gallery gameId={id} />

    </div>
  );
};

export default StoreImages;
