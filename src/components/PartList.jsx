import { useEffect, useState } from 'react';
import { Col } from 'react-bootstrap';
import { PartDetail } from './part-detail/PartDetail';
import { Part } from './part/Part';

export function PartList(props) {
  const [partList, setPartList] = useState([]);
  const [selectedPartId, setSelectedPartId] = useState(undefined);

  useEffect(() => {
    const fetchData = async () => {
      const resp = await fetch(
        'https://robot-cpe-2024.cleverapps.io/parts'
      );
      const partList = await resp.json();
      setPartList(partList);
    };
    fetchData();
  }, []);

  // reset selected part id when robot selection is updated
  useEffect(() => {
    setSelectedPartId(undefined);
  }, [props.selectedPartIds]);

  const parts = partList.filter((part) =>
    props.selectedPartIds.includes(part.id)
  );

  return (
    <>
      <Col md={4} lg={4}>
        {parts.map((part) => (
          <Part
            key={part.id}
            part={part}
            onPartClicked={() => setSelectedPartId(part.id)}
            selectedPartId={selectedPartId}
          />
        ))}
      </Col>
      <Col md={4} lg={4}>
        <PartDetail parts={parts} selectedPartId={selectedPartId} />
      </Col>
    </>
  );
}
