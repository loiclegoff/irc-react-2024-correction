import { useEffect } from 'react';
import { Spinner } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setRobots } from '../core/actions';
import { selectRobots } from '../core/selectors';
import { Robot } from './robot/Robot';

export function RobotList() {
  const dispatch = useDispatch();
  const robotList = useSelector(selectRobots);

  useEffect(() => {
    const fetchData = async () => {
      const resp = await fetch(
        'https://robot-cpe-2024.cleverapps.io/robots'
      );
      const robotList = await resp.json();
      dispatch(setRobots(robotList));
    };
    fetchData();
  }, [dispatch]);

  if (robotList.length < 1) {
    return <Spinner animation="border" />;
  }

  return (
    <div>
      {robotList.map((robot) => (
        <Robot key={robot.id} robot={robot} />
      ))}
    </div>
  );
}
