'use client';

import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import { ZoomIn } from "react-feather";

export default function SliderSection() {
  const images = [
    "/images/banners/px4.jpg",
    "/images/banners/px5.jpg",
    "/images/banners/px6.jpg",
    "/images/banners/px7.jpg",
    "/images/banners/px8.jpg",
    "/images/banners/px9.jpg",
  ];

  const slides = [...images, ...images];
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handlePrev = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((prev) =>
        prev === 0 ? images.length - 1 : (prev as number) - 1
      );
    }
  };

  const handleNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((prev) =>
        prev === images.length - 1 ? 0 : (prev as number) + 1
      );
    }
  };

  return (
    <div className="relative w-full">
      <Swiper
        modules={[Autoplay, FreeMode]}
        loop
        freeMode
        grabCursor
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          reverseDirection: true,
          pauseOnMouseEnter: false,
        }}
        speed={3000}
        slidesPerView={1}
        spaceBetween={0}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 2 },
          1440: { slidesPerView: 3 },
        }}
        style={{ height: '500px' }}
      >
        {slides.map((src, idx) => (
          <SwiperSlide key={idx}>
            <div
              className="relative w-full h-full cursor-pointer group"
              onClick={() => setSelectedIndex(idx % images.length)} // keep index inside original array
            >
              <img
                src={src}
                alt={`Portfolio ${idx}`}
                className="w-full h-full object-cover block"
              />
              {/* Zoom Icon (hover only) */}
              <ZoomIn className="absolute inset-0 m-auto text-white text-4xl opacity-0 group-hover:opacity-100 transition duration-300" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Fullscreen Overlay */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 z-[9999] backdrop-blur-lg flex items-center justify-center" style={{ backgroundColor: 'rgba(28, 39, 76, 0.09)' }}>
          {/* Close Button */}
          <button
            aria-label="Close (Esc)"
            onClick={() => setSelectedIndex(null)}
            className="absolute top-5 right-5 text-3xl leading-none p-2 rounded-full bg-dark hover:bg-neutral-900 transition"
          >
            &times;
          </button>

          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className="absolute left-5 text-white text-5xl px-3 py-2 bg-dark/50 rounded-full hover:bg-dark transition"
          >
            ‹
          </button>

          {/* Fullscreen Image */}
          <img
            src={images[selectedIndex]}
            alt={`Full size ${selectedIndex}`}
            className="max-h-screen max-w-screen object-contain rounded shadow-2xl"
          />

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="absolute right-5 text-white text-5xl px-3 py-2 bg-dark/50 rounded-full hover:bg-dark transition"
          >
            ›
          </button>
        </div>
      )}
    </div>
  );
}
