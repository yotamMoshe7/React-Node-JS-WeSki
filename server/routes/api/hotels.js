const express = require('express');
const axios = require('axios');
const config = require('config');
const { filterDistanceObj } = require('../../utills/utility');
const { filterImages } = require('../../utills/utility');
const { compareHotels } = require('../../utills/utility');
const router = express.Router();

router.post('/', async (req, res) => {
  const { query } = req.body;
  try {
    const response = await axios.post(config.get('weSkiServerURL'), {
      query: query,
    });

    // organize the data
    let hotels = response.data.body.accommodations;
    hotels = hotels.map((hotel) => {
      return {
        code: hotel.HotelCode,
        image: filterImages(hotel.HotelDescriptiveContent.Images),
        distanceFromCenter: filterDistanceObj(
          hotel.HotelInfo.Position.Distances,
          'city_center'
        ),
        distanceFromSkiLift: filterDistanceObj(
          hotel.HotelInfo.Position.Distances,
          'ski_lift'
        ),
        rating: hotel.HotelInfo.Rating,
        name: hotel.HotelName,
        prices: hotel.PricesInfo,
      };
    });

    const sortedByPriceHotels = hotels.sort(compareHotels);

    res.json({ hotels: sortedByPriceHotels });
  } catch (error) {
    console.log(error);
    res.status(500).send('Server Error');
  }
});

module.exports = router;