"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import {
  FaChevronLeft,
  FaChevronRight,
  FaTimes,
  FaExpand,
} from "react-icons/fa";

interface MediaCarouselProps {
  media: string[];
  alt: string;
  imagePosition?: string;
  containerClassName?: string;
  objectFit?: string;
  enableBlurBg?: boolean;
}

export default function MediaCarousel({
  media,
  alt,
  imagePosition = "object-center",
  containerClassName = "relative h-56 w-full",
  objectFit = "object-cover",
  enableBlurBg = false,
}: MediaCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // --- SWIPE STATE ---
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);
  const isDragging = useRef(false); // Prevents accidental clicks when swiping

  const minSwipeDistance = 50;

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEndX(null);
    setTouchStartX(e.targetTouches[0].clientX);
    isDragging.current = false; // Reset drag state
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.targetTouches[0].clientX);
    // If they move their finger more than 10px, count it as a drag, not a tap
    if (
      touchStartX &&
      Math.abs(e.targetTouches[0].clientX - touchStartX) > 10
    ) {
      isDragging.current = true;
    }
  };

  const handleTouchEnd = () => {
    if (!touchStartX || !touchEndX || media.length <= 1) return;

    const distance = touchStartX - touchEndX;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextMedia(); // Swipe left -> Next
    }
    if (isRightSwipe) {
      prevMedia(); // Swipe right -> Previous
    }
  };

  const isVideo = (src: string) => /\.(mp4|webm|ogg)$/i.test(src);

  const nextMedia = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % media.length);
  };

  const prevMedia = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + media.length) % media.length);
  };

  const openFullscreen = () => {
    if (isDragging.current) return; // Don't open if they were just swiping!
    setIsFullscreen(true);
  };

  const closeFullscreen = () => setIsFullscreen(false);

  const renderContent = (src: string, isFull: boolean) => {
    if (isVideo(src)) {
      return (
        <>
          {enableBlurBg && !isFull && (
            <video
              src={src}
              className="absolute inset-0 w-full h-full object-cover blur-xl opacity-40 scale-125 pointer-events-none"
              autoPlay
              muted
              loop
              playsInline
            />
          )}

          <video
            key={src}
            src={src}
            className={`absolute inset-0 z-10 w-full h-full ${isFull ? "object-contain" : `pointer-events-none ${objectFit} ${imagePosition}`}`}
            controls={isFull}
            autoPlay
            muted={!isFull}
            loop
            playsInline
          />
        </>
      );
    }

    return (
      <>
        {enableBlurBg && !isFull && (
          <Image
            src={src}
            alt={`${alt} background`}
            fill
            className="absolute inset-0 object-cover blur-xl opacity-40 scale-125 pointer-events-none z-0"
          />
        )}

        <Image
          key={src}
          src={src}
          alt={alt}
          fill
          sizes={
            isFull
              ? "100vw"
              : "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          }
          priority={currentIndex === 0 && !isFull}
          className={`z-10 transition-all duration-500 ${isFull ? "object-contain" : `group-hover/carousel:scale-105 ${objectFit} ${imagePosition}`}`}
          draggable={false} // Prevent default browser image dragging
        />
      </>
    );
  };

  return (
    <>
      {/* 1. INLINE CAROUSEL (Now with Touch Events) */}
      <div
        className={`${containerClassName} bg-slate-900 overflow-hidden group/carousel cursor-pointer flex items-center justify-center touch-pan-y`}
        onClick={openFullscreen}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {renderContent(media[currentIndex], false)}

        {/* Expand Icon */}
        <div className="absolute top-3 right-3 p-2 rounded-full bg-black/50 text-white opacity-0 group-hover/carousel:opacity-100 transition-opacity z-10">
          <FaExpand size={14} />
        </div>

        {/* Arrows & Dots */}
        {media.length > 1 && (
          <>
            <button
              onClick={prevMedia}
              className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white opacity-0 group-hover/carousel:opacity-100 transition-opacity hover:bg-black/70 z-20 hidden md:block"
            >
              <FaChevronLeft size={16} />
            </button>
            <button
              onClick={nextMedia}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white opacity-0 group-hover/carousel:opacity-100 transition-opacity hover:bg-black/70 z-20 hidden md:block"
            >
              <FaChevronRight size={16} />
            </button>
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-20">
              {media.map((_, index) => (
                <div
                  key={index}
                  className={`h-2 rounded-full transition-all ${index === currentIndex ? "w-4 bg-blue-500" : "w-2 bg-white/60"}`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* 2. FULLSCREEN MODAL (Also with Touch Events) */}
      {isFullscreen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm touch-none">
          {/* Close Button */}
          <button
            onClick={closeFullscreen}
            className="absolute top-6 right-6 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-50"
          >
            <FaTimes size={24} />
          </button>

          {/* Full Content Container */}
          <div
            className="relative w-full max-w-6xl h-[80vh] flex items-center justify-center p-4"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {renderContent(media[currentIndex], true)}
          </div>

          {/* Fullscreen Navigation Arrows */}
          {media.length > 1 && (
            <>
              <button
                onClick={prevMedia}
                className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 p-4 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-50 hidden md:block"
              >
                <FaChevronLeft size={24} />
              </button>
              <button
                onClick={nextMedia}
                className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 p-4 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-50 hidden md:block"
              >
                <FaChevronRight size={24} />
              </button>
            </>
          )}
        </div>
      )}
    </>
  );
}
