var config = require("../knexfile");
var env = "development";
var knex = require("knex")(config[env]);

const findMostRecent = function(listing_id) {
  // console.log("accessing postgres db.....");
  return knex
    .from("reviews")
    .where('listing_id', listing_id )
    .orderBy("created_at", "desc")
    .limit(100)
    .then(records => {
      return records;
    });
};

const findMostRelevant = function() {
  // console.log("accessing postgres db.....");
  return knex
    .from("reviews")
    .orderBy("user_rating", "desc")
    .limit(100)
    .then(records => {
      return records;
    });
};

const findFilteredReviews = function(query) {
  return knex
    .from("reviews")
    .where("description", "like", `%${query}%`)
    .limit(100)
    .then(records => {
      return records;
    });
};

const addReview = function(review) {
  return knex
    .insert(review)
}

const deleteReview = function(review_id) {
  return knex
    .where({review_id: review_id})
    .del()
}

const updateReview = function(review_id, column, newData) {
  return knex
    .where({review_id: review_id})
    .update({ column: newData })
}

module.exports = knex;

module.exports = { findMostRecent, findMostRelevant, findFilteredReviews, addReview, deleteReview, updateReview };
