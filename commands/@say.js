exports.run = (client, message, args) => {

  let modRole = message.guild.roles.find("name", "Mods");
  if (!message.member.roles.has(modRole.id)) {
    return message.reply(":no_entry_sign: | Error. You don't have the right permissions").catch(console.error);
  }
  message.delete(0);
  let msgSender = args.join(' ');
  message.channel.send(msgSender);
  message.delete(0);
  message.channel.sendMessage(message.content.split(" ").slice(1).join(" "));


};
