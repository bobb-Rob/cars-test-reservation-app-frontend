import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CarCard from './CarCard';

const Cars = () => {
  const navigate = useNavigate();
  const cars = useSelector((state) => state.cars);

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
        { cars.map((car) => ( 
        <CarCard key={car.id}
          model = {car.model}
          image = {car.image}
          description = {car.description}
        />)
        )}
      </div>      
    </div>
  );
};

export default Cars;
