import ClipLoader from 'react-spinners/ClipLoader';

const Loader = () => {
  return (
    <ClipLoader
      color='blue'
      loading={true}
      // cssOverride={override}
      size={30}
      aria-label='Loading Spinner'
      data-testid='loader'
    />
  );
};

export default Loader;
