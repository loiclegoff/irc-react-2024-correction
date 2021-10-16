import { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { PartList } from './components/PartList';
import { RobotList } from './components/RobotList';

function App() {
  const [robotList, setRobotList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const resp = await fetch(
        'https://robot-cpe-2024.cleverapps.io/robots'
      );
      const robotList = await resp.json();
      setRobotList(robotList);
    };
    fetchData();
  }, []);

  return (
    <Container fluid>
      <Row>
        <h1> Welcome to robot shop</h1>
      </Row>
      <Row>
        <Col md={4} lg={4}>
          <RobotList robotList={robotList} />
        </Col>
        <Col md={4} lg={4}>
          <PartList />
        </Col>
        <Col md={4} lg={4} />
      </Row>
    </Container>
  );
}

export default App;
