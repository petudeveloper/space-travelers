const URL = 'https://api.spacexdata.com/v3/rockets';

// Actions
const LOAD = 'spaceships/rockets/LOAD';

// Reducer
export default (state = [], action) => {
  switch (action.type) {
    case LOAD:
      return action.state;
    default:
      return state;
  }
};

// Action Creators
export const loadRockets = () => async (dispatch) => {
  const res = await fetch(URL);
  const data = await res.json();
  const state = data.map((rocket) => ({
    rocket_id: rocket.id,
    rocket_name: rocket.rocket_name,
    rocket_description: rocket.description,
    rocket_flickr_image: rocket.flickr_images[0],
  }));
  dispatch({ type: LOAD, state });
};
