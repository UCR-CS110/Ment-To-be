const mongoose = require("../mongoose/mongoose-index");
const Message = require("./message");
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
  conversations: { type: [Schema.Types.Mixed], ref: "Message" },
});

const ChatRoom = new mongoose.model("ChatRoom", ChatRoomSchema);

module.exports = ChatRoom;
