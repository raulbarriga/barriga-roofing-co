import React from "react";

import Header from "./HeaderComponent";
import AboutMe from "./AboutMeComponent";
import Services from "./ServicesComponent";
import Gallery from "./GalleryComponent";
import Form from "./FormComponent";
import Footer from "./FooterComponent";
import ScrollToTopButton from "./ScrollToTopButton";

const MainComponent = () => {
  return (
    <>
      <Header />
      <main>
        <ScrollToTopButton showBelow={250} />
        <AboutMe />
        <Services />
        <Gallery />
        <Form />
        <Footer />
      </main>
    </>
  );
};

export default MainComponent;
