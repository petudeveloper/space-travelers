const URL = 'https://api.spacexdata.com/v3/rockets';

// Actions
const LOAD = 'spaceships/rockets/LOAD';
const RESERVE_ROCKET = 'spaceships/rockets/RESERVE';

// Reducer
export default (state = [], action) => {
  switch (action.type) {
    case LOAD:
      return action.state;
    case RESERVE_ROCKET:
      return state.map((rocket) => {
        if (rocket.id !== action.id) return rocket;
        return { ...rocket, reserved: true };
      });
    default:
      return state;
  }
};

// Action Creators
export const loadRockets = () => async (dispatch) => {
  const res = await fetch(URL);
  const data = await res.json();
  const state = data.map((rocket) => ({
    id: rocket.id,
    name: rocket.rocket_name,
    image: rocket.flickr_images[0],
    type: rocket.rocket_type,
    description: rocket.description,
  }));
  dispatch({ type: LOAD, state });
};

export const reserveRocket = (id) => ({
  type: RESERVE_ROCKET,
  id,
});
