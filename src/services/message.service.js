const { Message } = require("../models");


/** Create message */
const createMessage = async (reqBody) => {
  return Message.create(reqBody);
};

/** Get message list */
const getMessageList = async () => {
  return Message.find({ $or: [{ is_active: true }] })
    .populate("sender_id")
    .populate("receiver_id")
};

/** Get message details by id */
const getMessageById = async (messageId) => {
  return Message.findById(messageId);
};

/** message details update by id */
const updateDetails = async (messageId, updateBody) => {
  return Message.findByIdAndUpdate(messageId, { $set: updateBody });
};

/** Delete message */
const deleteMessage = async (messageId) => {
  return Message.findByIdAndDelete(messageId);
};

module.exports = {
  createMessage,
  getMessageList,
  getMessageById,
  updateDetails,
  deleteMessage,
};
