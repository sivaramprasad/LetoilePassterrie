"use client";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css";

const slides = [
  {
    bg: "bg-whites",
    title: "Made With Love",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at ipsum at risus euismod lobortis in",
  },
  {
    bg: "bg-whites2",
    title: "Made With Love",
    desc: "Lorem ipsum dolor sit, consectetur elit nunc suscipit non ipsum nec suscipit.",
  },
];

const HeroCarousal = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Hide text first
    setAnimate(false);
    // Trigger animation after slide becomes active
    const timer = setTimeout(() => setAnimate(true), 100);
    return () => clearTimeout(timer);
  }, [activeIndex]);

  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 3500,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
      modules={[Autoplay, Pagination]}
      className="hero-carousel"
      onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
    >
      {slides.map((slide, idx) => (
        <SwiperSlide key={idx}>
          <div className={`flex items-center pt-6 sm:pt-0 flex-col-reverse sm:flex-row ${slide.bg}`}>
            <div className="max-w-[600px] py-10 sm:py-15 lg:py-24.5 pl-4 sm:pl-7.5 lg:pl-12.5 flex flex-col items-start space-y-4">
              
              {/* H1 */}
              <h1
                className={`font-semibold text-dark text-xl sm:text-3xl mb-3 whittext fn-text transition-all duration-[1200000ms] ease-out ${
                  animate && activeIndex === idx ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                }`}
              >
                <a href="#" className="text-dark">{slide.title}</a>
              </h1>

              {/* Paragraph */}
              <p
                className={`des-size fn-textp transition-all duration-[1400ms] ease-out delay-[500ms] ${
                  animate && activeIndex === idx ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                }`}
              >
                {slide.desc}
              </p>

              {/* Button */}
              <a
                href="#"
                className={`inline-flex font-medium text-custom-sm rounded-md bg-dark py-3 px-9 transition-all duration-[1600ms] ease-out delay-[900ms] mt-10 ${
                  animate && activeIndex === idx ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                }`}
              >
                Shop Now
              </a>

            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeroCarousal;
