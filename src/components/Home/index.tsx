import React from "react";
import Hero from "./Hero";
import Categories from "./Categories";
import NewArrival from "./NewArrivals";
import PromoBanner from "./PromoBanner";
import BestSeller from "./BestSeller";
import CounDown from "./Countdown";
import Gallery from "./SliderGallery";
import Gallerys from "./SliderGallery2"
import Testimonials from "./Testimonials";
import Newsletter from "../Common/Newsletter";

const Home = () => {
  return (
    <main>
      <Hero />
      <BestSeller />
      <PromoBanner />
       <NewArrival />
       <Categories />    
      <CounDown />
      <Gallery/>
      <Gallerys/>
      {/* <Testimonials />
      <Newsletter /> */}
    </main>
  );
};

export default Home;
