import { useEffect, useState } from 'react';
import { RobotList } from './components/RobotList';
import { PartList } from './components/PartList';

function App() {
  const [robots, setRobots] = useState([]);
  const [selectedPartIds, setSelectedPartIds] = useState([]);

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

      <RobotList
        robotList={robots}
        setSelectedPartIds={setSelectedPartIds}
      ></RobotList>
      <PartList selectedPartIds={selectedPartIds} />
    </div>
  );
}
export default App;
