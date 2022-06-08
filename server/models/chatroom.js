const mongoose = require("../mongoose/mongoose-index");

const Schema = mongoose.Schema;

const ChatRoomSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  room_id: {
    type: String,
    required: true,
  },
  pic: {
    type: String,
    required: true,
  },
  owner: {
    type: String,
    required: true,
  },
});

const ChatRoom = new mongoose.model("ChatRoom", ChatRoomSchema);

module.exports = ChatRoom;
