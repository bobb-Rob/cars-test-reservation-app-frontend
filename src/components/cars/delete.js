import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteCars } from '../../redux/Cars/addcarSlice';
import '../../styles/delete.css';

export default function Delete() {
  const dispatch = useDispatch();

  const carState = useSelector((state) => state.cars);

  // how to get the id of the car to be deleted from the store and pass it to the deleteCars action

  // const handleDelete = (id) => {
  //   dispatch(deleteCars({ id }));
  // };

  const renderlist = carState.cars.map((car) => (
    <div key={car.id} className="card g-col-6">
      <img src={car.featured_image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{car.model}</h5>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">{car.year_released}</li>
      </ul>
      <div className="card-body">
        <button
          onClick={() => dispatch(deleteCars(car.id))}
          type="button"
          className="btn btn-danger"
        >
          Delete
        </button>
      </div>
    </div>
  ));

  return <div className="flex">{renderlist}</div>;
}
