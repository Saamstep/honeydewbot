exports.run = (client, message, args) => {
  message.channel.send(":white_check_mark: | pong").catch(console.error);
};
