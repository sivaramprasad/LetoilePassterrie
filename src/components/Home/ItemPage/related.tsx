"use client";

import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const products = [
  {
    title: "Chocolate Basque Cheesecake",
    price: 59.0,
    id: 1,
    imgs: {
      thumbnails: [
        "/images/products/product-1-sm-1.png",
        "/images/products/product-1-sm-2.png",
      ],
      previews: ["/images/banners/px5.jpg"],
    },
  },
  {
    imgs: {
      thumbnails: [
        "/images/banners/product-2-sm-1.png",
        "/images/products/product-2-sm-2.png",
      ],
      previews: ["/images/banners/px4.jpg"],
    },
    title: "Chocolate Basque Cheesecake",
    price: 899.0,
    id: 2,
  },
  {
    title: "Chocolate Basque Cheesecake",
    price: 59.0,
    id: 3,
    imgs: {
      thumbnails: [
        "/images/products/product-3-sm-1.png",
        "/images/products/product-3-sm-2.png",
      ],
      previews: ["/images/banners/px6.jpg"],
    },
  },
  {
    title: "Chocolate Basque Cheesecake",
    price: 59.0,
    id: 4,
    imgs: {
      thumbnails: [
        "/images/products/product-4-sm-1.png",
        "/images/products/product-4-sm-2.png",
      ],
      previews: ["/images/banners/px7.jpg"],
    },
  },
  {
    title: "Chocolate Basque Cheesecake",
    price: 99.0,
    id: 5,
    imgs: {
      thumbnails: [
        "/images/products/product-5-sm-1.png",
        "/images/products/product-5-sm-2.png",
      ],
      previews: ["/images/banners/px11.jpg"],
    },
  },
  {
    title: "Chocolate Basque Cheesecake",
    price: 59.0,
    id: 6,
    imgs: {
      thumbnails: [
        "/images/products/product-6-sm-1.png",
        "/images/products/product-6-sm-2.png",
      ],
      previews: ["/images/banners/px8.jpg"],
    },
  },
  {
    title: "Chocolate Basque Cheesecake",
    price: 59.0,
    id: 7,
    imgs: {
      thumbnails: [
        "/images/products/product-7-sm-1.png",
        "/images/products/product-7-sm-2.png",
      ],
      previews: ["/images/banners/px10.jpg"],
    },
  },
  {
    title: "Chocolate Basque Cheesecake",
    price: 59.0,
    id: 8,
    imgs: {
      thumbnails: [
        "/images/products/product-8-sm-1.png",
        "/images/products/product-8-sm-2.png",
      ],
      previews: ["/images/banners/px9.jpg"],
    },
  },
];

export default function Categories() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animate, setAnimate] = useState(true);
  const timerRef = useRef<number | null>(null);


  useEffect(() => {
    setAnimate(false);
    const timer = setTimeout(() => setAnimate(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
 <section className="slider-display-theme-1 w-[80%] mx-auto">

           <div className="mb-10 mt-10 flex items-center justify-center">
     <h2 className="font-semibold text-xl sm:text-2xl xl:text-heading-5 text-dark mb-1.5">
              Related Products
              </h2>
              </div>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={0}
        slidesPerView={4}  // 👈 exactly 4 visible
        loop={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: false }}
        breakpoints={{
          320: { slidesPerView: 1 },   // mobile
          640: { slidesPerView: 2 },   // tablet
          1024: { slidesPerView: 4 },  // desktop
        }}
      > 
        {products.map((slide) => (
          <SwiperSlide key={slide.id} className="padright">
            <div className="flex flex-col items-center text-center bg-white rounded-lg">
              <div className="w-full h-[300px] overflow-hidden rounded">
                <img
                  src={slide.imgs?.previews?.[0] ?? "/placeholder.png"}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Title */}
              <p
                className={`text-dark mt-3 transition-all duration-700 ${
                  animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
                }`}
              >
                {slide.title}
              </p>

              {/* Price */}
              <p
                className={`text-gray-600 transition-all duration-800 delay-100 ${
                  animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
                }`}
              >
                ₹{slide.price}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
