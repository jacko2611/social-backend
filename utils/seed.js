const mongoose = require('mongoose');
const User = require('./models/user');

// Connect to MongoDB
mongoose.connect('mongodb://localhost/social', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

// Define seed data
const userData = [
  {
    username: 'johnsmith',
    email: 'johnsmith@example.com',
    thoughts: [
      {
        thoughtText: "Just had an amazing cup of coffee!",
        createdAt: new Date()
      },
      {
        thoughtText: "I'm so excited for my vacation next week!",
        createdAt: new Date()
      }
    ]
  },
  {
    username: 'janedoe',
    email: 'janedoe@example.com',
    thoughts: [
      {
        thoughtText: "Just finished a great workout!",
        createdAt: new Date()
      },
      {
        thoughtText: "Can't wait to try out that new restaurant in town!",
        createdAt: new Date()
      }
    ]
  },
  {
    username: 'bobdoe',
    email: 'bobdoe@example.com',
    thoughts: [
      {
        thoughtText: "Just got back from a great trip!",
        createdAt: new Date()
      },
      {
        thoughtText: "I can't believe it's already April!",
        createdAt: new Date()
      }
    ]
  }
];

// Insert seed data
User.insertMany(userData)
  .then(() => {
    console.log('Seed data inserted!');
    mongoose.connection.close();
  })
  .catch(err => {
    console.error(err);
  });
