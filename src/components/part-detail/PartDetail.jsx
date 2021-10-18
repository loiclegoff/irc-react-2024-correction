import { Card } from 'react-bootstrap';
import { Price } from '../components/Price';
import { Visual } from '../robot/Visual';

export const PartDetail = (props) => {
  const seletedPart = props.parts.find(
    (part) => part.id === props.selectedPartId
  );

  return seletedPart ? (
    <Card className="p-5">
      <h1>{seletedPart.title}</h1>
      <p>{seletedPart.description}</p>
      <Visual
        src={seletedPart.visual_src}
        type={seletedPart.visual_type}
      />
      <Price value={seletedPart.price} />
    </Card>
  ) : null;
};
