import React, { useState } from "react";
import "./ImageGallery.css"; // We'll create this next

const ImageGallery = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  // Your gallery images (replace with your actual image paths)
  const images = [
    "/images/obras1.jpg",
    "/images/obras2.jpg",
    "/images/obras3.jpg",
  ];

  return (
    <div className="gallery-container">
      <div className="gallery-grid">
        {images.map((img, index) => (
          <div
            key={index}
            className="gallery-item"
            onClick={() => setSelectedImg(img)}
          >
            <img
              src={img}
              alt={`Imagen ${index + 1}`}
              className="gallery-image"
            />
          </div>
        ))}
      </div>

      {/* Modal for enlarged image */}
      {selectedImg && (
        <div className="modal" onClick={() => setSelectedImg(null)}>
          <div className="modal-content">
            <img
              src={selectedImg}
              alt="Enlarged view"
              className="enlarged-image"
            />
            <button
              className="close-btn"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImg(null);
              }}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
