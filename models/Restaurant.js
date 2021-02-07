const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const restaurantDetailsSchema = new Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  img: { type: String, required: true },
  open: { type: String, required: true },
  close: { type: String, required: true },
  ratings: { type: Number },
});
const RestaurantDetails = mongoose.model(
  "restaurants",
  restaurantDetailsSchema
);

module.exports = RestaurantDetails;
