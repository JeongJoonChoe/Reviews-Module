const faker = require("faker");
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

const csvWriter = createCsvWriter({
  path: './database/seeds/generated_data.csv',
  header: [
    {id: 'review_id', title: 'review_id'},
    {id:'username', title: 'username'},
    {id: 'created_at', title: 'created_at'},
    {id: 'description', title: 'description'},
    {id: 'image_url', title: 'image_url'},
    {id: 'user_rating', title: 'user_rating'},
    {id: 'accuracy', title: 'accuracy'},
    {id: 'communication', title: 'communication'},
    {id: 'cleanliness', title: 'cleanliness'},
    {id: 'location', title: 'location'},
    {id: 'check_in', title: 'check_in'},
    {id: 'value', title: 'value'},
    {id: 'listing_id', title: 'listing_id'}
  ]
})

const createFakeUser = () => ({
  review_id: ' ',
  username: faker.name.findName(),
  created_at: faker.date.past(),
  description: faker.lorem.sentences(),
  image_url: faker.image.avatar(),
  user_rating: faker.random.number({
    min: 0,
    max: 100
  }),
  accuracy: faker.random.number({
    min: 3,
    max: 5
  }),
  communication: faker.random.number({
    min: 3,
    max: 5
  }),
  cleanliness: faker.random.number({
    min: 3,
    max: 5
  }),
  location: faker.random.number({
    min: 3,
    max: 5
  }),
  check_in: faker.random.number({
    min: 1,
    max: 5
  }),
  value: faker.random.number({
    min: 2,
    max: 5
  }),
  listing_id: faker.random.number({
    min: 0,
    max: 10
  })
});

function makeFakeUsers(userCount) {
  const fakeUsers = [];
  const desiredFakeUsers = userCount;
  for (let i = 0; i < desiredFakeUsers; i++) {
    fakeUsers.push(createFakeUser());
  }
  return fakeUsers;
}

async function createCsv(userCount, index) {

  const csvWriter = createCsvWriter({
    path: `./database/seeds/generated_data${index}.csv`,
    header: [
      {id: 'review_id', title: 'review_id'},
      {id:'username', title: 'username'},
      {id: 'created_at', title: 'created_at'},
      {id: 'description', title: 'description'},
      {id: 'image_url', title: 'image_url'},
      {id: 'user_rating', title: 'user_rating'},
      {id: 'accuracy', title: 'accuracy'},
      {id: 'communication', title: 'communication'},
      {id: 'cleanliness', title: 'cleanliness'},
      {id: 'location', title: 'location'},
      {id: 'check_in', title: 'check_in'},
      {id: 'value', title: 'value'},
      {id: 'listing_id', title: 'listing_id'}
    ]
  })

  csvWriter
  .writeRecords(makeFakeUsers(userCount))
  .then(() => console.log('Csv file written'));
}

// createCsv(500000);
module.exports = createCsv;
// module.exports = makeFakeUsers;

