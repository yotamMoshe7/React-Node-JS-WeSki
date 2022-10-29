import styled from 'styled-components';

const InputList = ({ id, placeholder, icon, onChange, listValues }) => {
  return (
    <InputListStyle>
      <img className='icon' alt='input-icon' src={icon} />
      <select
        name={id}
        id={id}
        placeholder={placeholder}
        onChange={(event) =>
          onChange(id, {
            id: event.target[event.target.selectedIndex].id,
            name: event.target.value,
          })
        }
      >
        <option key='default-value' value='' disabled selected hidden>
          {placeholder}
        </option>
        {listValues.map((item) => (
          <option key={item.id} value={item.name} id={item.id}>
            {item.name}
          </option>
        ))}
      </select>
    </InputListStyle>
  );
};

export const InputListStyle = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  .icon {
    z-index: 0;
    position: absolute;
    margin-left: 0.5rem;
  }

  select {
    border-radius: 0.3rem;
    background-color: transparent;
    z-index: 1;
    border: 0.1rem solid #b1aeae;
    outline: none;
    padding: 1rem 0 1rem 2.2rem;
    width: ${({ dateInput }) => dateInput && '110px'};
    color: grey;

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

export default InputList;
