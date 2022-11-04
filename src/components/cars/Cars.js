import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CarCard from './CarCard';
import '../../styles/Carousel.css';

const Cars = () => {
  const navigate = useNavigate();
  const state = useSelector((state) => state);
  const { cars } = state.cars;
  const { user } = state;
  // const threeCars = cars.slice(0, 3);

  useEffect(() => {
    if (user.status === 'not-logged-in') {
      navigate('/login');
    }
    if (user.error === 'Unauthorized') {
      navigate('/login');
    }
  }, [user.status, user.error, navigate]);

  return (
    <div className="main-car-container">
      <h1>Latest Models</h1>
      <p>Please select a car model</p>
      <div className="car-container">
        {(cars.length <= 0) && (
          <div className="loading">
            <h4>No Cars to show, Please add new car</h4>
          </div>
        )}
        { cars.map((car) => (
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
