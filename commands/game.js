
 exports.run = (client, message, args) => {
   let game = args.join(' ');
   let admin = message.guild.roles.find("name", "Supreme Commander");
   if (!message.member.roles.has(admin.id)) {
     return message.reply(":no_entry_sign: | Error. You don't have the right permissions").catch(console.error);
   }
   if (message.author.id !== '136637808063414272') {
     return message.reply(":no_entry_sign: | You are not the bot owner :P");
   }
   if (game.length <= 10) {
     client.user.setGame(game).catch(console.error);
     message.channel.send(":ok_hand: | Successfully changed the game to: " + "`" + game + "`");
   }
   if (game.length > 11) {
     return message.reply(":no_entry_sign: | `" + game + "` is too long!");
   }

 };

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
