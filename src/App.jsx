import { useEffect, useState } from 'react';
import { RobotList } from './components/RobotList';
import { PartList } from './components/PartList';
import { Col, Container, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

function App() {
  const [selectedPartIds, setSelectedPartIds] = useState([]);
  const dipatch = useDispatch();

  useEffect(() => {
    async function fetchRobots() {
      const resp = await fetch(
        'https://robot-cpe-2024.cleverapps.io/robots'
      );

      const robotsResp = await resp.json();

      dipatch({
        type: 'ADD_ROBOTS',
        payload: robotsResp,
      });
    }
    fetchRobots();
  }, [dipatch]);

  return (
    <Container fluid>
      <Row>
        <h1> this is my first React Component </h1>
      </Row>

      <Row>
        <Col>
          <RobotList
            setSelectedPartIds={setSelectedPartIds}
          ></RobotList>
        </Col>
        <Col>
          <PartList selectedPartIds={selectedPartIds} />
        </Col>
      </Row>
    </Container>
  );
}
export default App;
