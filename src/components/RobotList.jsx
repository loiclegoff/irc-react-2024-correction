import { Robot } from './Robot';

export function RobotList(props) {
  return props.robotList.map((robot, i) => (
    <Robot
      key={i}
      robot={robot}
      setSelectedPartIds={props.setSelectedPartIds}
    />
  ));
}
