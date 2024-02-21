import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Carossel.css'; // Assurez-vous que le chemin vers le fichier CSS est correct

function Carossel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear"
  };

  return (
    <div className="carosselle-container">
      <Slider {...settings}>
        <div className="carosselle-slide">
          <img src={`${process.env.PUBLIC_URL}/img/h4-slide.png`} alt="Slide 1" />
        </div>
        <div className="carosselle-slide">
          <img src={`${process.env.PUBLIC_URL}/img/h4-slide2.png`} alt="Slide 2" />
        </div>
        <div className="carosselle-slide">
          <img src={`${process.env.PUBLIC_URL}/img/h4-slide3.png`} alt="Slide 3" />
        </div>
      </Slider>
    </div>
  );
}

export default Carossel;
