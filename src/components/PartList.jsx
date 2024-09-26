import { useState, useEffect } from 'react';
import { Part } from './Part';
import { useSelector } from 'react-redux';

export function PartList(props) {
  const [parts, setParts] = useState([]);

  const selectedRobotId = useSelector(
    (state) => state.robotReducer.selectedRobotId
  );

  useEffect(() => {
    async function fetchParts() {
      const resp = await fetch(
        'https://robot-cpe-2024.cleverapps.io/parts'
      );

      const partsResp = await resp.json();

      setParts(partsResp);
    }
    fetchParts();
  }, []);

  console.log(selectedRobotId);

  return (
    <div>
      {parts
        .filter((part) => props.selectedPartIds.includes(part.id))
        .map((part) => (
          <Part key={part.id} part={part} />
        ))}
    </div>
  );
}
