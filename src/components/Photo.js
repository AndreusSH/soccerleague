import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
  



const Photo = () => {
 
    const { id } = useParams();

 
  return (
    <div className="flex flex-col items-center">
  
        <Link to={`/gallery/${id}`}>
        <button
          className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
          type="button"
        >
          Add Photo
        </button>
      </Link>
     </div>
  );
};

export default Photo;
