// Helper function to generate a valid room id
module.exports.room_id_generator = function generateRoomIdentifier() {
  // make a list of legal characters
  // we're intentionally excluding 0, O, I, and 1 for readability
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";

  let result = "";
  for (let i = 0; i < 6; i++)
    result += chars[Math.floor(Math.random() * chars.length)];

  return result;
};
