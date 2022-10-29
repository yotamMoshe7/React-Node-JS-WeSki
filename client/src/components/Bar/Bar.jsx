import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import weSkiIcon from '../../assets/we-ski-logo.png';
import CalenderIcon from '../../assets/calender-icon.png';
import laplangeIcon from '../../assets/laplange.png';
import peopleIcon from '../../assets/group-people.png';
import searchIcon from '../../assets/search-icon.png';
import styled from 'styled-components';
import Input from '../Input/Input';
import Button from '../Button/Button';
import InputList from '../list-input/InputList';
import { BASE_URL, resortsList } from '../../constants/constants';
import { validateInputs } from './validations';
import Text from '../Text/Text';
import { setHotels, setSearchValues } from '../../reducers/hotelsSlice';
import Loader from '../Loader/Loader';

const inputsObject = {
  ski_site: {
    id: 'ski_site',
    text: 'Destination',
    value: {
      id: null,
      name: null,
    },
  },
  from_date: {
    id: 'from_date',
    text: 'From',
    value: null,
  },
  to_date: {
    id: 'to_date',
    text: 'To',
    value: null,
  },
  group_size: {
    id: 'group_size',
    text: 'Group Number',
    value: null,
  },
};

const Bar = () => {
  const [formValues, setFormValues] = useState(inputsObject);
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const handleChange = useCallback(
    (key, value) => {
      setFormValues({
        ...formValues,
        [key]: {
          ...formValues[key],
          value,
        },
      });
    },
    [formValues]
  );

  const searchClicked = useCallback(async () => {
    const validationResult = validateInputs(formValues);
    if (validationResult === true) {
      try {
        // Disable error message
        setErrorMessage(null);
        setLoading(true);

        // Create api request obj
        const apiRequestObj = {
          ski_site: formValues['ski_site'].value.id,
          from_date: formValues['from_date'].value,
          to_date: formValues['to_date'].value,
          group_size: formValues['group_size'].value,
        };

        const { data } = await axios.post(BASE_URL, {
          query: apiRequestObj,
        });

        setLoading(false);
        dispatch(
          setSearchValues({
            ...apiRequestObj,
            ski_site: formValues['ski_site'].value.name,
          })
        );
        dispatch(setHotels(data.hotels));
      } catch (error) {
        console.log(error);
      }
    } else setErrorMessage(validationResult);
  }, [formValues, dispatch]);

  return (
    <BarStyled component='form'>
      <div className='bar-wrapper'>
        <img alt='we-ski-logo' src={weSkiIcon} />
        <InputList
          id={inputsObject['ski_site'].id}
          placeholder={inputsObject['ski_site'].text}
          icon={laplangeIcon}
          onChange={handleChange}
          listValues={resortsList}
        />
        <Input
          type='number'
          id={inputsObject['group_size'].id}
          placeholder={inputsObject['group_size'].text}
          icon={peopleIcon}
          onChange={handleChange}
        />
        <Input
          type='date'
          id={inputsObject['from_date'].id}
          placeholder={inputsObject['from_date'].text}
          icon={CalenderIcon}
          onChange={handleChange}
        />
        <Input
          type='date'
          id={inputsObject['to_date'].id}
          placeholder={inputsObject['to_date'].text}
          icon={CalenderIcon}
          onChange={handleChange}
        />
        <div className='button-wrapper'>
          {!loading ? (
            <Button label='Search' icon={searchIcon} onClick={searchClicked} />
          ) : (
            <Loader />
          )}
        </div>
      </div>
      <Text text={errorMessage} color='red' className='error-message' />
    </BarStyled>
  );
};

const BarStyled = styled.div`
  .bar-wrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;
    justify-content: space-between;
  }

  .error-message {
    margin-top: 2rem;
  }

  .button-wrapper {
    width: 6rem;
    display: flex;
    justify-content: center;
  }
`;

export default Bar;
