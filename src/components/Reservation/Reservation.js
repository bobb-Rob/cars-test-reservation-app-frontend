import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteReserve } from '../../redux/Reservations/ReserveSlice';

function Reservations() {
  const dispatch = useDispatch();
  const reservations = useSelector((state) => state.reservations.reservations);
  const cars = useSelector((state) => state.cars.cars);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h1 className="text-center">Reservations</h1>
          <div className="row">
            {reservations.length <= 0 && (
              <div className="loading">
                <h4 className="text-center">No reservations</h4>
              </div>
            )}
            {reservations.map((reservation) => (
              <div className="col-md-4" key={reservation.id}>
                <div className="card mb-4">
                  <div className="card-body">
                    <img
                      src={
                        cars.find((car) => car.id === reservation.car_id).featured_image
                      }
                      alt="car"
                      className="img-fluid"
                    />
                    {reservation.car_id ? (
                      <h5 className="card-title">
                        {
                          cars.find((car) => car.id === reservation.car_id)
                            .model
                        }
                      </h5>
                    ) : (
                      <h5 className="card-title">Car not found</h5>
                    )}

                    <p className="card-text">{reservation.city}</p>
                    <p className="card-text">{reservation.reservation_date}</p>

                    <button
                      type="button"
                      onClick={() => dispatch(deleteReserve(reservation.id))}
                      className="btn btn-danger"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reservations;
