const filterDistanceObj = (array, field) => {
  const res = array.filter((distanceObj) => distanceObj.type === field);
  return res[0].distance;
};

const filterImages = (array) => {
  const res = array.filter((image) => image.MainImage === 'True');
  return res[0].URL;
};

const compareHotels = (hotel1Param, hotel2Param) =>
  hotel1Param > hotel2Param ? 1 : hotel2Param > hotel1Param ? -1 : 0;

module.exports = { filterDistanceObj, filterImages, compareHotels };
