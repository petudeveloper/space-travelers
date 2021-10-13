import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useEffect } from 'react';
import { loadRockets } from '../../redux/rockets/rockets';
import Rocket from './Rocket';

const ListOfRockets = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rockets);
  const loadRocketsAction = bindActionCreators(loadRockets, dispatch);

  useEffect(() => {
    if (rockets.length === 0) loadRocketsAction();
    return () => null;
  }, []);

  return (
    <ul>
      {
          rockets.map((rocket) => (
            <Rocket
              key={`rocket${rocket.id}`}
              name={rocket.name}
              imageUrl={rocket.image}
            />
          ))
      }
    </ul>
  );
};

export default ListOfRockets;
