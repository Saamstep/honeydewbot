exports.run = (client, message, args) => {
  message.channel.send(`:white_check_mark: | Pong! \`${Date.now() - message.createdTimestamp} ms\``);
//  msg.channel.send("Ping?").then(m => m.edit(`Pong! Latency is ${m.createdTimestamp - msg.createdTimestamp}ms. API Latency is ${Math.round(bot.ping)}ms`) );
};
