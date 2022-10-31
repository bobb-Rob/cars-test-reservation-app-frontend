import React from 'react';

function Addcars() {
  return (
    <div>

      <form>
        <div className="form-group">
          { /* eslint-disable-next-line jsx-a11y/label-has-associated-control */ }
          <label htmlFor="formGroupExampleInput">Model</label>
          <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Model" />
        </div>
        <div className="form-group">
          { /* eslint-disable-next-line jsx-a11y/label-has-associated-control */ }
          <label htmlFor="formGroupExampleInput">Brand</label>
          <input type="text" className="form-control" id="formGroupExampleInput" placeholder="brand" />
        </div>
        <div className="form-group">
          <form htmlFor="exampleFormControlSelect1">Year</form>
          <select className="form-control" id="exampleFormControlSelect1">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>
        { /* eslint-disable-next-line jsx-a11y/label-has-associated-control */ }
        <label htmlFor="start">year_released</label>

        <input
          type="date"
          id="start"
          name="trip-start"
          min="1990-01-01"
          max="2022-12-31"
        />
      </form>
    </div>
  );
}

export default Addcars;
