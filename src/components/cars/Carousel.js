import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../../styles/Carousel.css';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CarCard from './CarCard';

const Carousel = () => {
  const carState = useSelector((state) => state.cars);
  return (
    <Slider
      infinite
      speed={500}
      slidesToShow={3}
      slidesToScroll={3}
      autoplay
    >
      { carState.cars.map((car) => (
        <div key={car.id}>
          <Link to={`/cars/${car.id}`} className="car-link">
            <CarCard
              key={car.id}
              model={car.model}
              image={car.featured_image}
              specifications={car.specifications}
            />
          </Link>
        </div>
      ))}
      {/* <div>
        <img
          src="https://www.kindpng.com/picc/m/37-376655_black-sapphire-metallic-bmw-7-sedan-2013-car.png"
          alt="car"
          style={{ width: '100%' }}
        />
      </div>
      <div>
        <img
          src="https://www.kindpng.com/picc/m/20-201550_yellow-ferrari-front-view-car-png-image-pngpix.png"
          alt="car"
          style={{ width: '100%' }}
        />
      </div>
      <div>
        <img
          src="https://www.kindpng.com/picc/m/482-4828965_mercedes-benz-gls-class-red-car-png-image.png"
          alt="car"
          style={{ width: '100%' }}
        />
      </div>
      <div>
        <img
          src="https://www.kindpng.com/picc/m/186-1866052_transparent-red-jeep-clipart-audi-r8-car-png.png"
          alt="car"
          style={{ width: '100%' }}
        />
      </div>
      <div>
        <img
          src="https://www.kindpng.com/picc/m/482-4828965_mercedes-benz-gls-class-red-car-png-image.png"
          alt="car"
          style={{ width: '100%' }}
        />
      </div>
      <div>
        <img
          src="https://www.kindpng.com/picc/m/186-1866052_transparent-red-jeep-clipart-audi-r8-car-png.png"
          alt="car"
          style={{ width: '100%' }}
        />
      </div> */}
    </Slider>
  );
};

export default Carousel;
