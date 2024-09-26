import { Card } from 'react-bootstrap';
import { Visual } from './Visual';
export function Robot(props) {
  const { title, id, visual_type, visual_src } = props.robot;

  return (
    <Card style={{ width: '18rem' }}>
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
