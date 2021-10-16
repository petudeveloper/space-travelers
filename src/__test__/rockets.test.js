import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import store from '../redux/cofigureStore';
import Rocket from '../components/rockets/Rocket';
import '@testing-library/jest-dom';
import RocketsList from '../components/rockets/ListOfRockets';

beforeEach(() => {
  render(
    <Provider store={store}>
      <Rocket
        key="Rocket Key Test"
        name="Rocket Test"
        imageUrl="Rocket Test ImageURL"
        description="Rocket Test Description."
        id={1}
        reserved
      />
    </Provider>,
  );
});
afterEach(cleanup);

describe('List of Rockets Tests', () => {
  test('RocketsList should display properly', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <RocketsList />
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Rockets Tests', () => {
  test('Reserve badge should appear when a Rocket is reserved', () => {
    screen.getByText('Rocket Test');
    expect(screen.getByText('Reserved')).toBeInTheDocument();
  });
  test('Reserve button should appear when a Rocket is reserved', () => {
    screen.getByText('Rocket Test');
    expect(screen.getByText('Cancel Reservation')).toBeInTheDocument();
  });
});
