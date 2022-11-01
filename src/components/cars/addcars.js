import React from 'react';
import logo from '../../images/cars-bnb-logo.png';
import '../../styles/addcars.css';

function Addcars() {
  return (
    <div className="big">
      <div className="container">
        <form>
          <div className="brand-logo">
            {' '}
            <img src={logo} alt="Cars bnb logo" />
            {' '}
          </div>

          <div className="inputs">
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label className="green">Model</label>
            <input type="text" placeholder="Model" />
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label className="green">Brand</label>
            <input type="text" placeholder="Brand" />
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label className="green" htmlFor="date">
              date
            </label>

            <input
              type="date"
              id="date"
              name="trip-date"
              min="1990-01-01"
              max="2022-12-31"
            />
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label className="green">car Photo</label>
            <input type="text" placeholder="car Photo" />

            <button className=" mr" type="submit">
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Addcars;
