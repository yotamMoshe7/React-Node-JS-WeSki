import styled from 'styled-components';
import Text from '../Text/Text';
import { MEDIUM } from '../../constants/constants';

const Price = ({ className, price }) => {
  return (
    <PriceStyle className={className}>
      <Text text={`$${price}`} fontSize={MEDIUM} />
      <Text text='/per person' fontSize={MEDIUM} />
    </PriceStyle>
  );
};

const PriceStyle = styled.div`
  display: flex;
  flex-direction: row;
`;

export default Price;
