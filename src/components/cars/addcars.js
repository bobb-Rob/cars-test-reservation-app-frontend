/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useForm } from 'react-hook-form';
import logo from '../../images/cars-bnb-logo.png';
import '../../styles/addcars.css';

function Addcars() {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      brand: '',
      model: '',
      data: '',
      photo: '',
    },
  });

  return (
    <div className="big">
      <div className="container">
        <form
          onSubmit={handleSubmit((data) => {
            console.log(data);
          })}
        >
          <div className="brand-logo">
            {' '}
            <img src={logo} alt="Cars bnb logo" />
            {' '}
          </div>

          <div className="inputs">
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label className="green">Model</label>
            <input
              className="input2"
              type="text"
              {...register('model', { required: true })}
              placeholder="Model"
            />
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label className="green">Brand</label>
            <input
              {...register('brand', { required: true })}
              className="input2"
              type="text"
              placeholder="Brand"
            />
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label className="green" htmlFor="date">
              date
            </label>

            <input
              className="input2"
              type="date"
              id="date"
              {...register('date', { required: true })}
              min="1990-01-01"
              max="2022-12-31"
            />
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label className="green">car Photo</label>
            <input
              {...register('photo', { required: true })}
              className="input2"
              type="text"
              placeholder="car Photo"
            />

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
