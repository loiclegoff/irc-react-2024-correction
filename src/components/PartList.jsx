import { useEffect } from 'react';
import { Part } from './Part';
import { useDispatch, useSelector } from 'react-redux';

export function PartList() {
  const dispatch = useDispatch();
  useEffect(() => {
    async function fetchParts() {
      const resp = await fetch(
        'https://robot-cpe-2024.cleverapps.io/parts'
      );

      const partsResp = await resp.json();

      dispatch({
        type: 'ADD_PARTS',
        payload: partsResp,
      });
    }
    fetchParts();
  }, [dispatch]);

  const selectedParts = useSelector((state) =>
    state.partReducer.parts.filter((part) =>
      state.partReducer.selectedPartIds.includes(part.id)
    )
  );

  return (
    <div>
      {selectedParts.map((part) => (
        <Part key={part.id} part={part} />
      ))}
    </div>
  );
}
