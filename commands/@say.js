exports.run = (client, message, args) => {
  message.delete(0);
  message.channel.sendMessage(msg.content.split(" ").slice(1).join(" "));

};
