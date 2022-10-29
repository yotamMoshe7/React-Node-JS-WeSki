import { useCallback } from 'react';
import styled from 'styled-components';
import star from '../../assets/star.png';

const HotelsStars = ({ className, starsNum }) => {
  const createStarsArray = useCallback((starsNum) => {
    const starsArray = [];
    for (let i = 0; i < starsNum; i++) {
      starsArray.push(<img alt='stars' src={star} />);
    }
    return starsArray;
  }, []);

  return (
    <StarsStyle className={className}>
      {createStarsArray(starsNum).map((starElement) => starElement)}
    </StarsStyle>
  );
};

const StarsStyle = styled.div``;

export default HotelsStars;
