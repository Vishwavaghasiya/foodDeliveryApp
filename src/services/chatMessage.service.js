const { ChatMessage } = require("../models");

/**Create chatMessage */
const createChatMessage = async (reqBody) => {
  return ChatMessage.create(reqBody);
};

/**Get chatMessage list */
const getChatMessageList = async () => {
  return ChatMessage.find({ $or: [{ is_active: true }] })
    .populate("sender_id")
    .populate("reciever_id")
};

/**Get chatMessage details by id */
const getChatMessageById = async (chatMessageId) => {
  return ChatMessage.findById(chatMessageId);
};

/**ChatMessage details update by id */
const updateDetails = async (chatMessageId, updateBody) => {
  return ChatMessage.findByIdAndUpdate(chatMessageId, { $set: updateBody });
};

/**Delete chatMessage */
const deleteChatMessage = async (chatMessageId) => {
  return ChatMessage.findByIdAndDelete(chatMessageId);
};

module.exports = {
  createChatMessage,
  getChatMessageList,
  getChatMessageById,
  updateDetails,
  deleteChatMessage,
};
