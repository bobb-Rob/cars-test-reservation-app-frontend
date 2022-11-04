/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import logo from '../../images/cars-bnb-logo.png';
import addcars from '../../redux/Cars/addcarSlice';
import '../../styles/addcars.css';

function Addcars() {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      brand: '',
      model: '',
      year_released: '',
      featured_image: '',
      specifications: '',
    },
  });

  const onSubmit = (car, e) => {
    e.preventDefault();
    dispatch(addcars(car)).then((response) => {
      const { code } = response.payload;
      if (code === 200) {
        reset();
        navigate('/cars');
      }
    });
  };

  return (
    <div className="big">
      <div className="container">
        <form onSubmit={handleSubmit(onSubmit)}>
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
              {...register('year_released', { required: true })}
              min="1990-01-01"
              max="2022-12-31"
            />
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label className="green">car Photo</label>
            <input
              {...register('featured_image', { required: true })}
              className="input2"
              type="text"
              placeholder="car Photo"
            />
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label className="green">specifications</label>
            <textarea
              {...register('specifications', { required: true })}
              className="input3"
              type="text"
              placeholder="specifications"
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
