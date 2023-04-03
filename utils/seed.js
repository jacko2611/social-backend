const connection = require('../config/connection');
const User = require('../models/User');
const Thought = require('../models/Thought');

// // Connect to MongoDB
// mongoose.connect('mongodb://localhost/social', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useCreateIndex: true,
//   useFindAndModify: false
// });

const thoughts = [
  {
    thoughtText: "Just had an amazing cup of coffee!",
    createdAt: new Date()
  },
  {
    thoughtText: "I'm so excited for my vacation next week!",
    createdAt: new Date()
  },
  {
    thoughtText: "Just finished a great workout!",
    createdAt: new Date()
  },
  {
    thoughtText: "Can't wait to try out that new restaurant in town!",
    createdAt: new Date()
  },
  {
    thoughtText: "Just got back from a great trip!",
    createdAt: new Date()
  },
]
// Define seed data
const userData = [
  {
    username: 'johnsmith',
    email: 'johnsmith@example.com',
  },
  {
    username: 'janedoe',
    email: 'janedoe@example.com',
 
  },
  {
    username: 'bobdoe',
    email: 'bobdoe@example.com',

  }
];

// Insert seed data
Thought.insertMany(thoughts)
.then(() => {
  const userData = [
    {
      username: 'johnsmith',
      email: 'johnsmith@example.com',
      // thoughts: [insertedIds[0], insertedIds[1]]
    },
    {
      username: 'janedoe',
      email: 'janedoe@example.com',
      // thoughts: [insertedIds[2], insertedIds[3]]
    },
    {
      username: 'bobdoe',
      email: 'bobdoe@example.com',

    }
  ];
  User.insertMany(userData)
    .then(() => {
      console.log('Seed data inserted!');
      mongoose.connection.close();
    })
    .catch(err => {
      console.error(err);
    });
  console.log('Seed data inserted!');
})
.catch(err => {
  console.error(err);
});


