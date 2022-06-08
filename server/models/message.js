const mongoose = require("../mongoose/mongoose-index");

const MessageSchema = new mongoose.Schema({
  room_id: {
    type: String,
    required: true,
  },
  pfp: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now(),
    required: true,
  },
});

const Message = new mongoose.model("Message", MessageSchema); // creating user model

module.exports = Message;
