import styled from 'styled-components';

const Input = ({ id, type, placeholder, icon, onChange }) => {
  return (
    <InputStyle type={type}>
      <img className='icon' alt='input-icon' src={icon} />
      <input
        type={type === 'date' ? 'text' : type}
        placeholder={placeholder}
        onFocus={(e) => {
          if (type === 'date') {
            e.currentTarget.type = 'date';
            e.currentTarget.focus();
          }
        }}
        onChange={(event) => onChange(id, event.target.value)}
      />
    </InputStyle>
  );
};

export const InputStyle = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  .icon {
    z-index: 0;
    position: absolute;
    margin-left: 0.5rem;
  }

  input {
    border-radius: 0.3rem;
    background-color: transparent;
    z-index: 1;
    border: 0.1rem solid #b1aeae;
    outline: none;
    padding: 1rem 1rem 1rem 2.2rem;
    padding: ${({ type }) =>
      type === 'date' ? '1rem 1rem 1rem 2.2rem' : '1rem 0 1rem 2.2rem'};
    width: ${({ type }) => (type === 'date' ? '6rem' : '5rem')};

    :hover {
      border-color: black;
    }

    :focus {
      border: 1px solid blue;
      ::placeholder {
        color: transparent;
      }
    }
  }
`;

export default Input;
