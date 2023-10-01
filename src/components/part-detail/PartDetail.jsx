import { Card } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { selectSelectedPart } from '../../core/selectors';
import { Price } from '../components/Price';
import { Visual } from '../robot/Visual';

export const PartDetail = () => {
  const selectedPart = useSelector(selectSelectedPart);

  if (!selectedPart) {
    return null;
  }

  return (
    <Card className="p-5">
      <h1>{selectedPart.title}</h1>
      <p>{selectedPart.description}</p>
      <Visual
        src={selectedPart.visual_src}
        type={selectedPart.visual_type}
      />
      <Price value={selectedPart.price} />
    </Card>
  );
};
