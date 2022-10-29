import styled from 'styled-components';
import Bar from './components/Bar/Bar';
import HotelDetails from './components/HotelDetails/HotelDetails';
import Text from './components/Text/Text';
import { LARGE } from './constants/constants';
import { useSelector } from 'react-redux';

const App = () => {
  const hotels = useSelector((state) => state.hotels.hotelsList);
  const { ski_site, from_date, to_date, group_size } = useSelector(
    (state) => state.hotels.searchValues
  );

  return (
    <MainPage>
      <Bar />
      {hotels.length > 0 && (
        <div>
          <Text text='Select your ski trip' fontSize={LARGE} weight='bold' />
          <div className='results-title'>
            <Text text={`${hotels.length} ski trips options`} />
            <Text text='|' />
            <Text text={ski_site} />
            <Text text='|' />
            <Text text={`${from_date} - ${to_date}`} />
            <Text text='|' />
            <Text text={`${group_size} people`} />
          </div>
          {hotels.map(
            ({ code, image, distanceFromCenter, rating, name, prices }) => (
              <HotelDetails
                code={code}
                image={image}
                distanceFromCenter={distanceFromCenter}
                rating={rating}
                name={name}
                price={prices['AmountAfterTax']}
                city={ski_site}
              />
            )
          )}
        </div>
      )}
    </MainPage>
  );
};

const MainPage = styled.div`
  .results-title {
    margin: 1rem 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 50rem;
    color: #858383;
  }

  .hotel {
    margin-top: 1rem;
  }
`;

export default App;
