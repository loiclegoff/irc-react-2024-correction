import { Card } from 'react-bootstrap';

export function Visual(props) {
  const { src, type } = props;
  return type === 'img' ? (
    <Card.Img variant="top" src={src} />
  ) : (
    <object
      width="100%"
      height="100%"
      aria-label="videoCard"
      data={src}
    ></object>
  );
}
