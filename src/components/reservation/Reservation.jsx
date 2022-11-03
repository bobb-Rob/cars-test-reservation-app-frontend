import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Reservations() {
  const reservations = useSelector((state) => state.reservations.reservations);

  console.log(reservations);

  return (
    <div>
      <h1>My reservations</h1>
      <ul>
        {reservations.map((reservation) => (
          <li key={reservation.id}>
            <Link to={`/reservations/${reservation.id}`}>
              {reservation.reservation_date}
              {reservation.updated_at}
              {reservation.city}
              {reservation.user_id}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Reservations;
