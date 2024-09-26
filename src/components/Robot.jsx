import { Card } from 'react-bootstrap';
import { Visual } from './Visual';
import { useDispatch } from 'react-redux';

export function Robot(props) {
  const { title, id, visual_type, visual_src, parts } = props.robot;

  const dispatch = useDispatch();
  function handleOnClick() {
    props.setSelectedPartIds(parts);
    dispatch({
      type: 'UPDATE_SELECTED_ROBOT',
      payload: { selectedRobotId: id, selectedPartIds: parts },
    });
  }

  return (
    <Card style={{ width: '18rem' }} onClick={handleOnClick}>
      <Card.Body>
        <Visual type={visual_type} src={visual_src} />
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {id}
        </Card.Subtitle>
      </Card.Body>
    </Card>
  );
}
