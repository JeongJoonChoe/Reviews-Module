var config = require("../../knexfile");
var env = "development";
var knex = require("knex")(config[env]);
var createCsv = require('./csv_generator.js');
const fs = require('fs');

async function seedMariaDB() {
  let start = Date.now();

  for (let i = 0; i < 10; i++) {
    await createCsv(500000, i);
    await knex.raw(`LOAD DATA LOCAL INFILE './database/seeds/generated_data${i}.csv'
      INTO TABLE Review.reviews
      FIELDS TERMINATED BY ','
      LINES TERMINATED BY '\n'
      IGNORE 1 LINES
      (review_id,username,@created_at,description,image_url,user_rating,accuracy,communication,cleanliness,location,check_in,value,listing_id)
      SET created_at = STR_TO_DATE(@created_at, '%a %b %d %Y %H:%i:%s');`)
    fs.unlink(`./database/seeds/generated_data${i}.csv`, (err) => {
      if (err) { console.log(err)}
    })
  }

  let end = Date.now();
  let min = (start - end) * -1.666e-5;
  let sec = Math.floor((min - Math.floor(min)) * 60);
  console.log(`Total Time to seed db: ${Math.floor(min)} minutes ${sec} seconds`);
}

seedMariaDB();
