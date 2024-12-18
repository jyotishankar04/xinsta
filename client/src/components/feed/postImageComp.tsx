"use client";

import { useState, useRef } from "react";
import Image from "next/image";

const PostImageComp: React.FC<{ images: string[] }> = ({ images }) => {
  // Limit to a maximum of 5 images
  const displayedImages = images.slice(0, 5);
  const [currentIndex, setCurrentIndex] = useState(0);

  const touchStartX = useRef(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? displayedImages.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === displayedImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Only show arrows if there is more than 1 image
  const showArrows = displayedImages.length > 1;

  // Swipe detection logic
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (Math.abs(diff) > 50) {
      // Minimum distance to detect swipe
      if (diff > 0) {
        handleNext(); // Swipe left
      } else {
        handlePrev(); // Swipe right
      }
    }
  };

  return (
    <div
      className="relative w-full h-full overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {showArrows && (
        <>
          <div
            className="absolute top-1/2 left-4 z-20 transform -translate-y-1/2 cursor-pointer"
            onClick={handlePrev}
          >
            <button className="text-white bg-black p-2 rounded-full opacity-75 hover:opacity-100 transition">
              {"<"}
            </button>
          </div>

          <div
            className="absolute top-1/2 right-4 z-20 transform -translate-y-1/2 cursor-pointer"
            onClick={handleNext}
          >
            <button className="text-white bg-black p-2 rounded-full opacity-75 hover:opacity-100 transition">
              {">"}
            </button>
          </div>
        </>
      )}

      <div className="relative w-full h-full">
        <Image
          src={displayedImages[currentIndex]}
          alt={`Post Image ${currentIndex + 1}`}
          className="object-contain w-full h-full"
          layout="fill"
        />
      </div>

      {/* Optional: Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {displayedImages.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full ${
              index === currentIndex ? "bg-white" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default PostImageComp;
