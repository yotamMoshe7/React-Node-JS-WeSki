const filterDistanceObj = (array, field) => {
  const res = array.filter((distanceObj) => distanceObj.type === field);
  return res[0].distance;
};

const filterImages = (array) => {
  const res = array.filter((image) => image.MainImage === 'True');
  return res[0].URL;
};

const compareHotelsByPrice = (hotel1, hotel2) =>
  hotel1.AmountAfterTax > hotel2.AmountAfterTax
    ? 1
    : hotel2.AmountAfterTax > hotel1.AmountAfterTax
    ? -1
    : 0;

module.exports = { filterDistanceObj, filterImages, compareHotelsByPrice };
