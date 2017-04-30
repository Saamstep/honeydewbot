let roll = Math.floor(Math.random() * (6 - 1)) + 1;

exports.run = (client, message, args) => {
  message.reply("You rolled a " + roll);
};
