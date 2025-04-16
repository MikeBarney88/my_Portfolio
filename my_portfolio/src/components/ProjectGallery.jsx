import { useState } from "react";
import SunnyBites from "../images/SunnyBites.jpg";
import Qap1 from "../images/Qap1.jpg";
import Sprint2 from "../images/Sprint2.png";

function ImageDropdown({
  imageUrl = "",
  imageAlt = "Sample image",
  buttonText = "Click to view image",
  imageWidth = "100%",
  imageHeight = "auto",
}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Dropdown Trigger Button */}
      <button onClick={toggleDropdown} className="DD-button">
        <span>{buttonText}</span>
        <span>{isOpen ? " ▲ " : " ▼ "}</span>
      </button>

      {/* Dropdown Content */}
      {isOpen && (
        <div>
          <img
            src={imageUrl}
            alt={imageAlt}
            style={{
              width: imageWidth,
              height: imageHeight,
              objectFit: "cover",
            }}
          />
        </div>
      )}
    </div>
  );
}

// Main component that uses an array of images
export default function ProductGallery() {
  // Array of product images
  const productImages = [
    {
      url: Qap1,
      alt: "Solo Project",
      label: "Solo Project",
      width: "300px",
      height: "200px",
    },
    {
      url: SunnyBites,
      alt: "Colab Project 1",
      label: "Colab Project 1",
      width: "300px",
      height: "200px",
    },
    {
      url: Sprint2,
      alt: "Colab Project 2",
      label: "Colab Project 2",
      width: "300px",
      height: "200px",
    },
  ];

  return (
    <div className="project-section">
      <h2>Click to see my projects</h2>
      <br />
      <div>
        {productImages.map((image, index) => (
          <ImageDropdown
            key={index}
            imageUrl={image.url}
            imageAlt={image.alt}
            buttonText={image.label}
          />
        ))}
      </div>
    </div>
  );
}
