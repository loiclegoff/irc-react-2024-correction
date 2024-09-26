import { useSelector } from 'react-redux';
import { Robot } from './Robot';

export function RobotList(props) {
  const robots = useSelector((state) => state.robotReducer.robots);
  return robots.map((robot, i) => (
    <Robot
      key={i}
      robot={robot}
      setSelectedPartIds={props.setSelectedPartIds}
    />
  ));
}
