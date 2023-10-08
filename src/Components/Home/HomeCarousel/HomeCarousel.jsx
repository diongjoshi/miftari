import { useState } from "react";
import miftariCommerceVerticalLogo from "../../../assets/images/Miftari Standart Logo.png";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

const HomeCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomedImageUrl, setZoomedImageUrl] = useState("");

  const handleNext = () => {
    setCurrentSlide(currentSlide + 1);
  };

  const handleBack = () => {
    setCurrentSlide(currentSlide - 1);
  };

  const handleImageClick = (imageUrl) => {
    setZoomedImageUrl(imageUrl);
    setIsZoomed(true);
  };

  const handleCloseZoom = () => {
    setIsZoomed(false);
    setZoomedImageUrl("");
  };

  return (
    <div>
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={10}
        totalSlides={3}
        currentSlide={currentSlide}
      >
        <Slider>
          <Slide index={0}>
            <img src="" alt="" onClick={() => handleImageClick("")} />
          </Slide>
          <Slide index={1}>
            <img
              src={miftariCommerceVerticalLogo}
              alt="Miftari Commerce Logo"
              onClick={() => handleImageClick(miftariCommerceVerticalLogo)}
            />
          </Slide>
          <Slide index={2}>I am the third Slide.</Slide>
        </Slider>
        <ButtonBack onClick={handleBack}>Back</ButtonBack>
        <ButtonNext onClick={handleNext}>Next</ButtonNext>
      </CarouselProvider>

      {isZoomed && (
        <div className="fullscreen-modal">
          <button onClick={handleCloseZoom}>Close</button>
          <img
            src={zoomedImageUrl}
            alt="Zoomed Image"
            className="zoomed-image"
          />
        </div>
      )}
    </div>
  );
};

export default HomeCarousel;
