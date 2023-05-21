import { useState } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Slider from "./components/Slider/Slider";
import NewsLater from "./components/NewsLater/NewsLater";
import ImgGallery from "./components/ImgGallery/ImgGallery";
import TabIndex from "./components/Tab/TabIndex";
import AnimationSection from "./components/Marquee/AnimationSection";

function App() {
  return (
    <>
      <Header />

      <Slick />
      <ImgGallery />

      <TabIndex />

      <NewsLater />
      <AnimationSection />

      <Footer />
    </>
  );
}

export default App;
