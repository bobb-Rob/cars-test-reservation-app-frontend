/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
// import { useParams } from 'react-router-dom';

const AddReserveForm = () => {
  const state = useSelector((state) => state);
  const { cars, user } = state;
  console.log(user);
  console.log(cars);
  const params = {};
  // console.log(params);
  const currentCar = cars.cars.find((car) => car.id === Number(params.carId)) || {};
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      city: '',
      date: '',
      car_id: '',
      user_id: '',
    },
  });

  const onSubmit = (data, e) => {
    e.preventDefault();
    const car = { ...data, car_id: currentCar.id, user_id: user.id };
    console.log(car);
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="City"
          {...register('city', { required: true })}
        />
        {errors.city && <span>City is required</span>}
        <input
          type="date"
          name="date"
          placeholder="Date"
          {...register('date', { required: true })}
        />
        {errors.date && <span>Date is required</span>}
        { cars.addFromNav ? (
          <select
            name="car_id"
            {...register('car_id', { required: true })}
          >
            {cars.cars.map((car) => (
              <option key={car.id} value={car.id}>
                {car.model}
              </option>
            ))}
          </select>
        ) : (
          <select
            name="car_id"
            {...register('car_id', { required: true })}
          >
            <option key={currentCar.id} value={currentCar.id}>
              {currentCar.model}
            </option>
          </select>
        )}
        <input type="submit" value="Reserve" />
      </form>
    </div>
  );
};

export default AddReserveForm;
