/* exports.run = (client, message, args) => {
  let admin = message.guild.roles.find("name", "Supreme Commander");
  if (!message.member.roles.has(admin.id)) {
    return message.reply(":no_entry_sign: | Error. You don't have the right permissions").catch(console.error);
  }
  let game = args[0];
  client.user.setGame(game).catch(console.error);
  message.channel.sendMessage("Successfully changed the game to:" + game);


};
*/
