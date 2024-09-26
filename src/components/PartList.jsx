import { useState, useEffect } from 'react';
import { Part } from './Part';

export function PartList(props) {
  const [parts, setParts] = useState([]);

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

  return (
    <div>
      {parts
        .filter((part) => props.selectedPartIds.includes(part.id))
        .map((part) => (
          <Part part={part} />
        ))}
    </div>
  );
}
