exports.run = (client, message, args) => {
  let game = "!@help";
  client.user.setGame(game).catch(console.error);


};
