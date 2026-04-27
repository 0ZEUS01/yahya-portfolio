"use client";

import { useState } from "react";
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
}

export default function MediaCarousel({ media, alt }: MediaCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Helper to check if a file is a video based on its extension
  const isVideo = (src: string) => /\.(mp4|webm|ogg)$/i.test(src);

  const nextMedia = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % media.length);
  };

  const prevMedia = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + media.length) % media.length);
  };

  const openFullscreen = () => setIsFullscreen(true);
  const closeFullscreen = () => setIsFullscreen(false);

  // Function to render either an Image or a Video
  const renderContent = (src: string, isFull: boolean) => {
    if (isVideo(src)) {
      return (
        <video
          key={src}
          className={`w-full h-full ${isFull ? "object-contain" : "object-cover pointer-events-none"}`}
          controls={isFull}
          autoPlay={true}
          muted={!isFull}
          loop={true}
          playsInline
        >
          <source src={src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      );
    }

    return (
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
        className={`transition-all duration-500 ${isFull ? "object-contain" : "object-cover group-hover/carousel:scale-105"}`}
      />
    );
  };
  return (
    <>
      {/* 1. INLINE CAROUSEL (Clickable) */}
      <div
        className="relative h-56 w-full bg-slate-200 dark:bg-slate-900 overflow-hidden group/carousel cursor-pointer"
        onClick={openFullscreen}
      >
        {renderContent(media[currentIndex], false)}

        {/* Expand Icon that appears on hover */}
        <div className="absolute top-3 right-3 p-2 rounded-full bg-black/50 text-white opacity-0 group-hover/carousel:opacity-100 transition-opacity z-10">
          <FaExpand size={14} />
        </div>

        {/* Arrows & Dots (Only show if multiple items) */}
        {media.length > 1 && (
          <>
            <button
              onClick={prevMedia}
              className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white opacity-0 group-hover/carousel:opacity-100 transition-opacity hover:bg-black/70 z-20"
            >
              <FaChevronLeft size={16} />
            </button>
            <button
              onClick={nextMedia}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white opacity-0 group-hover/carousel:opacity-100 transition-opacity hover:bg-black/70 z-20"
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

      {/* 2. FULLSCREEN MODAL */}
      {isFullscreen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm">
          {/* Close Button */}
          <button
            onClick={closeFullscreen}
            className="absolute top-6 right-6 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-50"
          >
            <FaTimes size={24} />
          </button>

          {/* Full Content (Uncropped) */}
          <div className="relative w-full max-w-6xl h-[80vh] flex items-center justify-center p-4">
            {renderContent(media[currentIndex], true)}
          </div>

          {/* Fullscreen Navigation Arrows */}
          {media.length > 1 && (
            <>
              <button
                onClick={prevMedia}
                className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 p-4 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-50"
              >
                <FaChevronLeft size={24} />
              </button>
              <button
                onClick={nextMedia}
                className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 p-4 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-50"
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
