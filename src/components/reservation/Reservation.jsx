import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Reservation() {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/reservations')
      .then((res) => res.json())
      .then((reservations) => setReservations(reservations));
  }, []);

  return (
    <div>
      <h1>My reservations</h1>
      <ul>
        {reservations.map((reservation) => (
          <li key={reservation.id}>
            <Link to={`/reservation/${reservation.id}`}>
              {reservation.item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Reservation;
