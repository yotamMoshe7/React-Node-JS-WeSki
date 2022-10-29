import styled from 'styled-components';
import locationIcon from '../../assets/location-icon.png';
import distanceIcon from '../../assets/distance-icon.png';
import HotelsStars from '../HotelsStars/HotelsStars';
import Text from '../Text/Text';
import { SMALL } from '../../constants/constants';
import { useCallback } from 'react';
import Price from '../Price/Price';

const HotelDetails = ({
  code,
  image,
  distanceFromCenter,
  rating,
  name,
  price,
  className,
  city,
}) => {
  const createDetail = useCallback((alt, icon, text, fontSize) => {
    return (
      <div className='detail-row-wrapper'>
        <img alt={alt} src={icon} />
        <Text
          text={text}
          fontSize={fontSize}
          className='text-detail'
          color='#504f4f'
        />
      </div>
    );
  }, []);

  return (
    <HotelDetailsStyle className={className}>
      <img alt='hotel' src={image} className='image' />
      <div className='details'>
        <Text
          text={`Hotel | ${name} | ${code}`}
          weight='bold'
          className='title'
        />
        <HotelsStars className='stars' starsNum={rating} />
        {createDetail('location', locationIcon, `${city}`, SMALL)}
        {createDetail(
          'distance',
          distanceIcon,
          `${distanceFromCenter} from center`,
          SMALL
        )}
        <Price className='price' price={price} />
      </div>
    </HotelDetailsStyle>
  );
};

const HotelDetailsStyle = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  width: 65rem;
  height: 10rem;
  align-items: center;
  margin-top: 2rem;

  .image {
    border-radius: 1rem 0 0 1rem;
    width: 20%;
  }

  .details {
    margin-left: 1rem;
    font-family: 'Objektiv Mk2';
    width: 80%;
  }

  .title {
    width: 100%;
  }

  .stars {
    margin-top: 1rem;
  }

  .detail-row-wrapper {
    display: flex;
    flex-direction: row;
    margin-top: 1rem;
  }

  .text-detail {
    margin-left: 0.5rem;
  }

  .price {
    position: absolute;
    bottom: 1rem;
    right: 1rem;
  }
`;

export default HotelDetails;
