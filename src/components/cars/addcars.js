import React from 'react';

function Addcars() {
  return (
    <div>
      <form>
        <div className="container">
          <div className="brand-logo" />
          <div className="brand-title">Cars_BNB</div>
          <div className="inputs">
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label>Model</label>
            <input type="text" placeholder="Model" />
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label>Brand</label>
            <input type="text" placeholder="Brand" />
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label htmlFor="start">date</label>

            <input
              type="date"
              id="start"
              name="trip-start"
              min="1990-01-01"
              max="2022-12-31"
            />

            <button type="submit">Add</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Addcars;
