import styled from 'styled-components';
import {
  LARGE,
  LARGE_TEXT_SIZE,
  MEDIUM,
  MEDIUM_TEXT_SIZE,
  SMALL,
  SMALL_TEXT_SIZE,
} from '../../constants/constants';

const Text = ({ text, className, fontSize, weight, color }) => {
  return (
    <TextStyle
      className={className}
      fontSize={fontSize}
      weight={weight}
      color={color}
    >
      {text}
    </TextStyle>
  );
};

const TextStyle = styled.div`
  font-family: 'Objektiv Mk2';
  font-weight: ${({ weight }) => weight && weight};
  color: ${({ color }) => color && color};
  font-size: ${({ fontSize }) =>
    fontSize === LARGE
      ? LARGE_TEXT_SIZE
      : fontSize === MEDIUM
      ? MEDIUM_TEXT_SIZE
      : fontSize === SMALL
      ? SMALL_TEXT_SIZE
      : MEDIUM_TEXT_SIZE}rem;
`;

export default Text;
