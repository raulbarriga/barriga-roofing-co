import React, { useCallback, useEffect } from "react";
import { ProGallery,  } from "pro-gallery";
import "pro-gallery/dist/statics/main.css";
// import axios from "axios";

import { galleryData } from "../data/galleryData";

const GalleryComponent = () => {

  // The options of the gallery (from the playground current state)
  const options = {
    galleryLayout: 2,
    enableInfiniteScroll: false,
    scrollAnimation: "FADE_IN",
    loadMoreAmount: "partial",
    hoveringBehaviour: "NEVER_SHOW",
    imageHoverAnimation: "DARKENED",
    imagePlacementAnimation: "SLIDE",
    imageLoadingMode: "COLOR",
    allowContextMenu: true,
    overlayBackground: "rgba(8,8,8,0.75)",
  };

  // The size of the gallery container. The images will fit themselves in it
  const container = {
    width: window.innerWidth,
    height: window.innerHeight,
  };

  // The eventsListener will notify you anytime something has happened in the gallery.
  const eventsListener = useCallback((eventName, eventData) => {
    console.log({ eventName, eventData });
  }, []);

     useEffect(() => {}, [eventsListener]);
  // The scrollingElement is usually the window, if you are scrolling inside another element, suplly it here
  const scrollingElement = window;

  return (
    <>
      <ProGallery
          items={galleryData}
          options={options}
          container={container}
          eventsListener={eventsListener}
          scrollingElement={scrollingElement}
        />
    </>
  );
};

export default GalleryComponent;
