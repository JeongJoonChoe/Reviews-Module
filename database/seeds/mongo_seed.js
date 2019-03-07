const mongoose = require('mongoose');
const makeFakeUsers = require('./csv_generator.js');

let reviewSchema = new mongoose.Schema({
  id: {type: Number, Index: true},
  username: {type: String, require: true},
  created_at: { type : Date, default: Date.now },
  description: String,
  image_url: String,
  user_rating: Number,
  accuracy: Number,
  communication: Number,
  cleanliness: Number,
  location: Number,
  check_in: Number,
  value: Number,
  listing_id: Number,
})

const Review = mongoose.model('Review', reviewSchema);

const mongoSeed = function() {
  mongoose.connect("mongodb://localhost/reviews")
    .then( async () => {
      let start = Date.now();
      for (let i = 0; i < 900; i++) {
        await Review.insertMany(makeFakeUsers(10000));
      }
      let end = Date.now();
      let min = (start - end) * -1.666e-5;
      let sec = Math.floor((min - Math.floor(min)) * 60);
      console.log(`Total Time to seed db: ${Math.floor(min)} minutes ${sec} seconds`);
      process.exit();
    })
    .catch(err => {
      console.log(err);
      process.exit();
    })
}

mongoSeed();