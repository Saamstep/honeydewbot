exports.run = (client, message, args) => {
  let modRole = message.guild.roles.find("name", "Mods");
  if (!message.member.roles.has(modRole.id)) {
    return message.reply(":no_entry_sign: | Error. You don't have the right permissions").catch(console.error);
  }
  if (message.mentions.users.size === 0) {
    return message.reply(":no_entry_sign: | Please mention a user to ban").catch(console.error);
  }
  let guildMember = message.guild.member(message.mentions.users.first());
  if (!guildMember) {
    return message.reply(":no_entry_sign: | That user does not seem valid");
  }
  if (!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) {
    return message.reply(":no_entry_sign: | I don't have permission `BAN_MEMBER` to do this.").catch(console.error);
  }
  guildMember.ban([1]).then(member => {
    message.reply(`:ok_hand: | **${member.user.username}** was succesfully banned. All of ${member.user.username}'s messages that were less than 24 hours old have been removed`).catch(console.error);
  }).catch(console.error);
};
