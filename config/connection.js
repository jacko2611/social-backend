// Require mongoose
const { connect, connection } = require('mongoose');

// Connect to the Mongo DB
connect('mongodb://localhost/social', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});


// Export the connection
module.exports = connection;