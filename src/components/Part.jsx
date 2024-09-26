import { Card, Table, Button, Badge } from 'react-bootstrap';

export function Part(props) {
  return (
    <Card className="mb-2">
      <Card.Header>
        <Card.Title>Part {props.part.id} description</Card.Title>
      </Card.Header>
      <Card.Body>
        <Table>
          <tr>
            <td> ID </td>
            <td>{props.part.id}</td>
          </tr>
          <tr>
            <td> NAME </td>
            <td>{props.part.title}</td>
          </tr>
          <tr>
            <td> PRICE</td>
            <td>
              <Button variant="primary">
                Price <Badge>{props.value}</Badge>
              </Button>
            </td>
          </tr>
        </Table>{' '}
      </Card.Body>
    </Card>
  );
}
