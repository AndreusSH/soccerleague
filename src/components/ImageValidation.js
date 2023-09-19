import { useState } from "react";

const ImageValidation = () => {
  const [error, setError] = useState(null);

  const validateImage = (image) => {
    const allowedExtensions = /\.(jpg|jpeg|png|gif)$/;
    if (!image.name.match(allowedExtensions)) {
      const error = "Sorry, wrong file type";
      setError(error);
    } else {
        if(image.size > 5000000){
            const error = "file too large, you can upload only files up to 5 mb";
            setError(error);
        }
     
    }
  };

  return (
    <div>
      <input
        type="file"
        onChange={(event) => {
          validateImage(event.target.files[0]);
        }}
      />
      {error && <p>{error}</p>}
    </div>
  );
};

export default ImageValidation;
