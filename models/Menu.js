const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const menuSchema = new Schema({
  rid: { type: String, required: true },
  title: { type: String, required: true },
  img: { type: String, required: true },
  category: { type: String, required: true },
  desc: { type: String, required: true },
  price: { type: Number, required: true },
});
const Menu = mongoose.model("menu", menuSchema);

module.exports = Menu;
