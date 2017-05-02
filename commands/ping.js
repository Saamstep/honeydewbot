exports.run = (client, message, args) => {
  message.channel.sendMessage(":white_check_mark: | pong").catch(console.error);
};
