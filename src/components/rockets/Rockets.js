import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useEffect } from 'react';
import { loadRockets } from '../../redux/rockets/rockets';

const Rockets = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rockets);
  const loadRocketsAction = bindActionCreators(loadRockets, dispatch);

  useEffect(() => {
    if (rockets.length === 0) loadRocketsAction();
    return () => null;
  }, []);

  return <div>TBA</div>;
};

export default Rockets;
