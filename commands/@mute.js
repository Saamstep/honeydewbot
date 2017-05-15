exports.run = (client, message, args) => {
  let modRole = message.guild.roles.find("name", "Mods");
  if (!message.member.roles.has(modRole.id)) {
    return message.reply(":no_entry_sign: | Error. You don't have the right permissions").catch(console.error);
  }
  if (message.mentions.users.size === 0) {
    return message.reply(":no_entry_sign: | Please mention a user to mute").catch(console.error);
  }
  let muteMember = message.guild.member(message.mentions.users.first());
  if (!muteMember) {
    return message.reply(":no_entry_sign: | That user does not seem valid");
  }
  if (!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) {
    return message.reply(":no_entry_sign: | I don't have permission `MANAGE_ROLES` to do this.").catch(console.error);
  }
  client.addRole(`Muted`).then(member => {
    message.reply(`:zipper_mouth: | **${member.user.username}** was succesfully muted.`).catch(console.error);
  }).catch(console.error);
};
