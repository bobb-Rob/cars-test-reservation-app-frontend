import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Addcars from '../components/cars/addcars';
import store from '../redux/store';

it('To check test is working', () => {
  expect(true).toBe(true);
});

it('Test if header render correctly', () => {
  const TREE = renderer.create(
    <Provider store={store}>
      <BrowserRouter>
        <Addcars />
      </BrowserRouter>
    </Provider>,
  );
  expect(TREE).toMatchSnapshot();
});
