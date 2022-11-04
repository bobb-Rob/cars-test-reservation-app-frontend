import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CarCard from './CarCard';
import '../../styles/Carousel.css';

const Cars = () => {
  const carState = useSelector((state) => state.cars);
  const threeCars = carState.cars.slice(0, 3);
  console.log(threeCars);

  return (
    <div className="main-car-container">
      <h1>Latest Models</h1>
      <p>Please select a car model</p>
      <div className="car-container">
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
      </div>
    </div>
  );
};

export default Cars;
