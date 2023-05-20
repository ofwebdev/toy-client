import { useState } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Slick from "./components/Slider/Slick";
import Newslater from "./components/NewsLater/Newslater";
import ImgGallery from "./components/ImgGallery/ImgGallery";

function App() {
  return (
    <>
      <Header />
      <Slick />
      <ImgGallery />
      <Newslater />
      <Footer />
    </>
  );
}

export default App;
