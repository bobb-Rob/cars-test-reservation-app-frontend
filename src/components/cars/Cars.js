import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
import CarCard from './CarCard';
import { getCars } from '../../redux/Cars/carSlice';

const Cars = () => {
  const carState = useSelector((state) => state.cars);
  console.log(carState);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCars()).then((response) => {
      console.log(response);
    });
  }, []);

  return (
    <div>
      <h1>Latest Models</h1>
      <p>Please select a car model</p>
      <div className="car-container">
        { carState.cars.map((car) => (
          <CarCard
            key={car.id}
            model={car.model}
            image={car.featured_image}
            specifications={car.specifications}
          />
        ))}
      </div>
    </div>
  );
};

export default Cars;
