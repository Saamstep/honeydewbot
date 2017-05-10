exports.run = (client, message, args) => {
  message.delete(0);
  message.channel.sendMessage(message.content.split(" ").slice(1).join(" "));

};
