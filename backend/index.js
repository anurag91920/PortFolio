require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
 const cors = require("cors");
// const { HoldingsModel } = require("./model/HoldingsModel");

// const { PositionsModel } = require("./model/PositionsModel");

// const { OrdersModel } = require("./model/OrdersModel");
 const { server } = require("./model/server");

const PORT = process.env.PORT || 3003;
const uries = process.env.MONGO_URL;

const app = express();

app.use(cors());
app.use(bodyParser.json());



// app.get("/allHoldings", async (req, res) => {
//    let allHoldings = await HoldingsModel.find({});
//    res.json(allHoldings);
//  });

//  app.get("/allPositions", async (req, res) => {
//    let allPositions = await PositionsModel.find({});
//    res.json(allPositions);
//  });

// app.post("/newOrder", async (req, res) => {
//   let newOrder = new OrdersModel({
//     name: req.body.name,
//     qty: req.body.qty,
//     price: req.body.price,
//     mode: req.body.mode,
//   });

//   newOrder.save();

//    res.send("Order saved!");
//  });

app.listen(PORT, () => {
  console.log("App started!");
  mongoose.connect(uries);
  console.log("DB started!");
});

const handleSubmit = async (e) => {
  e.preventDefault();

  const formData = {
    name: e.target.name.value,
    email: e.target.email.value,
    mobile: e.target.mobile.value,
    subject: e.target.subject.value,
    message: e.target.message.value,
  };

  try {
    const response = await fetch('http://localhost:5000/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    const result = await response.json();
    if (result.success) {
      alert('Message sent successfully!');
      e.target.reset();
    } else {
      alert('Failed to send message.');
    }
  } catch (err) {
    console.error('Error:', err);
    alert('Something went wrong.');
  }
};
