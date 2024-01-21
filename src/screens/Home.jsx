import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import ImageSection from "../components/ImageSection";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-start">
        <div className="xl:max-w-[1280px] w-full">
          <Hero />
        </div>
      </div>
      <Features />
      <ImageSection />
    </>
  );
};

export default Home;
