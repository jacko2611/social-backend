// Require mongoose
const { connect, connection } = require('mongoose');

// Connect to the Mongo DB
connect('mongodb://localhost/social', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


// Export the connection
module.exports = connection;