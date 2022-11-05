/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { addFromNav, createReserve, isError } from '../../redux/Reservations/ReserveSlice';
import BackArrow from '../utils/BackArrow';
import '../../styles/reservation.css';

const AddReserveForm = () => {
  const state = useSelector((state) => state);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [errorMessages, setErrorMessages] = React.useState([]);

  const { cars, reservations } = state;
  const { user } = state.user;
  const params = useParams();
  const currentCar = cars.cars.find((car) => car.id === Number(params.carId)) || {};
  const {
    register, handleSubmit, formState: { errors }, reset,
  } = useForm({
    defaultValues: {
      city: '',
      reservation_date: '',
      car_id: '',
      user_id: '',
    },
  });

  const onSubmit = (data, e) => {
    e.preventDefault();
    const reservation = { ...data, user_id: user.id };
    dispatch(createReserve(reservation)).then((response) => {
      if (response.type === 'reserve/createReserve/fulfilled') {
        if (response.payload.code === 200) {
          reset();
          navigate('/cars/reservations');
        } else {
          dispatch(isError(true));
          setErrorMessages(response.payload.error);
        }
      }
    });
  };

  useEffect(() => () => {
    dispatch(addFromNav(false));
    dispatch(isError(false));
  }, [reservations.addFromNav, dispatch]);

  return (
    <div className="container w-75 w-sm-50 mt-5 reserve-form-wrap">
      <BackArrow myClassName="reservation-back-btn" />
      { (reservations.error || (errorMessages.length > 0)) && (
        <div className="alert alert-danger" role="alert">
          {errorMessages.map((error) => (
            <p key={error}>{error}</p>
          ))}
        </div>
      )}
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
          name="reservation_date"
          className="form-control mb-3"
          placeholder="reservation_date"
          {...register('reservation_date', { required: true })}
        />
        {errors.date && <span>Date is required</span>}
        { reservations.addFromNav ? (
          <select
            name="car_id"
            className="form-select"
            aria-label="Default select example"
            {...register('car_id', { required: true })}
          >
            <option defaultValue="nil">Open to select a car</option>
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
            <option defaultValue="nil">Open to select a car</option>
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
