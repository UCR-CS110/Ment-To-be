const mongoose = require("../mongoose/mongoose-index");
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ChatRoomSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  room_id: {
    type: String,
    required: false,
  },
});

const ChatRoom = new mongoose.model("ChatRoom", ChatRoomSchema);

module.exports = ChatRoom;
