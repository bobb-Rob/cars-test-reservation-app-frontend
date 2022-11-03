import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteCars } from '../../redux/Cars/addcarSlice';
import '../../styles/delete.css';

export default function Delete() {
  const dispatch = useDispatch();

  const carState = useSelector((state) => state.cars);

  const handleDelete = (id) => {
    dispatch(deleteCars({ id }));
  };

  const renderlist = carState.cars.map((car) => (
    <div key={car.id} className="card g-col-6">
      <img src={car.featured_image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">
          {car.model}
          {' '}
          &
          {car.brand}
        </h5>
        <p className="card-text">{car.specifications}</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">{car.year_released}</li>
      </ul>
      <div className="card-body">
        <button
          onClick={handleDelete(car.id)}
          type="button"
          className="btn btn-danger"
        >
          Delete
        </button>
      </div>
    </div>
  ));

  return (
    <div className="flex">
      {renderlist}
      {/* <div className='card g-col-6'>
        <img src={car} className='card-img-top' alt='...' />
        <div className='card-body'>
          <h5 className='card-title'>Brand and Model</h5>
          <p className='card-text'>
            Some quick example text to build on the card title and make up the
            bulk of the card content.
          </p>
        </div>
        <ul className='list-group list-group-flush'>
          <li className='list-group-item'>Date</li>
        </ul>
        <div className='card-body'>
          <button type='button' className='btn btn-danger'>
            Delete
          </button>
        </div>
      </div> */}
    </div>
  );
}
