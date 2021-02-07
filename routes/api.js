const express = require("express");
const router = express.Router();
const RestaurantDetails = require("../models/Restaurant");
const Menu = require("../models/Menu");

router.get("/restaurant", async (req, res) => {
  const restaurantDetails = await RestaurantDetails.find();
  res.send(restaurantDetails);
});

router.post("/restaurant", async (req, res) => {
  const { name, location, img, open, close, ratings } = req.body;
  const restaurantDetails = new RestaurantDetails({
    name: name,
    location: location,
    img: img,
    open: open,
    close: close,
    ratings: ratings,
  });
  restaurantDetails.save().then(() => {
    res.send(restaurantDetails);
  });
});

router.get("/menu/:id", async (req, res) => {
  const { id } = req.params;
  console.log(id);
  const restaurantDetails = await Menu.find({ rid: id }).exec();
  res.send(restaurantDetails);
});

router.post("/menu", async (req, res) => {
  const { rid, title, img, category, desc, price } = req.body;
  const menuDetails = new Menu({
    rid: rid,
    title: title,
    img: img,
    category: category,
    desc: desc,
    price: price,
  });
  menuDetails.save().then(() => {
    res.send(menuDetails);
  });
});

router.get("/searchRestaurant", async (req, res) => {
  const { search } = req.query;
  console.log(search);
  RestaurantDetails.find(
    { name: new RegExp(search, "i") },
    function (err, data) {
      res.send(data);
    }
  );
});

module.exports = router;
