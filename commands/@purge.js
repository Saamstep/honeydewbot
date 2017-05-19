exports.run = (client, message, args, guild) => {
  let result = args.join(' ');
  let messagecount = parseInt(result);
  let modRole = message.guild.roles.find("name", "Mods");
  if (!message.member.roles.has(modRole.id)) {
    return message.reply(":no_entry_sign: | Error. You don't have the right permissions").catch(console.error);
  } else
  message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
  message.reply("Bulk deleted messages successfully!");
};
