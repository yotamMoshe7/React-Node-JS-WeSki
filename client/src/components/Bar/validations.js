export const validateInputs = (inputsObject) => {
  const skiSite = inputsObject['ski_site'].value;
  const groupSize = inputsObject['group_size'].value;
  const fromDate = new Date(inputsObject['from_date'].value);
  const toDate = new Date(inputsObject['to_date'].value);

  if (
    skiSite === null ||
    groupSize === null ||
    fromDate === null ||
    toDate === null
  ) {
    return 'Please select all Fields';
  } else if (groupSize < 1 || groupSize > 10) {
    return 'Please select group size between 1 to 10';
  } else if (fromDate > toDate) {
    return 'Not valid date range';
  }
  return true;
};
