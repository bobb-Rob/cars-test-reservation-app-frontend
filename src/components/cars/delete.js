import React from 'react';
import '../../styles/delete.css';
import car from '../../images/car.jpg';

export default function Delete() {
  return (
    <div className='flex'>
      <div className='card g-col-6'>
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
      </div>
      <div className='card g-col-6'>
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
      </div>
      <div className='card g-col-6'>
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
      </div>
      <div className='card g-col-6'>
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
      </div>
    </div>
  );
}
