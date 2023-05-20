import { useState } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Slick from "./components/Slider/Slick";
import Newslater from "./components/NewsLater/Newslater";
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

      <Newslater />
      <AnimationSection />
      <Footer />
    </>
  );
}

export default App;
