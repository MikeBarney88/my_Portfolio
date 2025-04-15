import { useState } from "react";

export default function ImageDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Dropdown Trigger Button */}
      <button onClick={toggleDropdown} className="DD-button">
        <span>Click to view image</span>
      </button>
      {isOpen}
      {/* Dropdown Content */}
      {isOpen && (
        <div>
          <img src="/api/placeholder/400/300" alt="Sample image" className="" />
          <p>Example image</p>
        </div>
      )}
    </div>
  );
}
