import styled from 'styled-components';

const Button = ({ label, icon, onClick }) => {
  return (
    <ButtonStyle>
      {icon && <img alt='search-icon' src={icon} />}
      <button className='button' onClick={onClick}>
        {label}
      </button>
    </ButtonStyle>
  );
};

const ButtonStyle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 0.1rem solid blue;
  border-radius: 0.5rem;
  padding: 0.5rem;

  .button {
    color: #1f5cf1;
    border: none;
  }

  :hover {
    border-color: black;
    .button {
      color: black;
    }
  }
`;
export default Button;
