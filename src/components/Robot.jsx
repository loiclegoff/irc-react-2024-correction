import { Card } from 'react-bootstrap';

export function Robot(props) {
  const { title, id, visual_type, visual_src } = props.robot;

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        {visual_type === 'img' ? (
          <Card.Img variant="top" src={visual_src} />
        ) : (
          <object
            width="100%"
            height="100%"
            aria-label="videoCard"
            data={visual_src}
          ></object>
        )}
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {id}
        </Card.Subtitle>
      </Card.Body>
    </Card>
  );
}
