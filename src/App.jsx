import { useEffect, useState } from 'react';
import { Button, InputGroup, Form } from 'react-bootstrap';
import { RobotList } from './components/RobotList';

function App() {
  const [robots, setRobots] = useState([]);

  useEffect(() => {
    async function fetchRobots() {
      const resp = await fetch(
        'https://robot-cpe-2024.cleverapps.io/robots'
      );

      const robotsResp = await resp.json();

      setRobots(robotsResp);
    }
    fetchRobots();
  }, []);

  return (
    <div className="App">
      <h1> this is my first React Component </h1>

      <RobotList robotList={robots}></RobotList>
    </div>
  );
}
export default App;
