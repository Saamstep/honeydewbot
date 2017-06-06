exports.run = (client, message, args) => {
  message.channel.send(`:white_check_mark: | Pong! \`${Date.now() - message.createdTimestamp} ms\``);
};
