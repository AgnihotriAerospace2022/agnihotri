const mongoose = require("mongoose");

const UserSchemea = mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "First Name is required"],
  },

  lastName: {
    type: String,
    required: false,
  },

  email: {
    type: String,
    required: [true, "email is required for further communication"],
  },

  query: {
    type: String,
    required: [true, "query is required !"],
  },
}
);

const userDetails = mongoose.model('user',UserSchemea);
module.exports =userDetails;