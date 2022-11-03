/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addFromNav } from '../../redux/Reservations/ReserveSlice';
import '../../styles/reservation.css';

const AddReserveForm = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const { cars, reservations } = state;
  const { user } = cars;
  const params = useParams();
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
    const reservation = { ...data, user_id: user.id };
    console.log(reservation);
  };

  useEffect(() => {
    console.log('mounted');
    return () => {
      console.log('unmounted');
      dispatch(addFromNav(false));
    };
  }, [reservations.addFromNav]);

  return (
    <div className="container w-75 w-sm-50 mt-5 reserve-form-wrap">
      <h2>Create a Reservation</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="City"
          className="form-control mb-3"
          {...register('city', { required: true })}
        />
        {errors.city && <span>City is required</span>}
        <input
          type="date"
          name="date"
          className="form-control mb-3"
          placeholder="Date"
          {...register('date', { required: true })}
        />
        {errors.date && <span>Date is required</span>}
        { reservations.addFromNav ? (
          <select
            name="car_id"
            className="form-select"
            aria-label="Default select example"
            {...register('car_id', { required: true })}
          >
            <option selected>Open to select a car</option>
            {cars.cars.map((car) => (
              <option key={car.id} value={car.id}>
                {car.model}
              </option>
            ))}
          </select>
        ) : (
          <select
            name="car_id"
            className="form-select"
            aria-label="Default select example"
            {...register('car_id', { required: true })}
          >
            <option selected>Open to select a car</option>
            <option key={currentCar.id} value={currentCar.id}>
              {currentCar.model}
            </option>
          </select>
        )}
        <input type="submit" value="Reserve" className="reserve-btn" />
      </form>
    </div>
  );
};

export default AddReserveForm;
