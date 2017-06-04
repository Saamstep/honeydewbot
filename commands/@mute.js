exports.run = (client, message, args) => {

  let modRole = message.guild.roles.find("name", "Mods");
  let muteRole = message.guild.roles.find("name", "Muted");
  let guild = message.guild;
  let user = message.mentions.users.first();
  let logchannel = guild.channels.find("name", "log");

  if (!message.member.roles.has(modRole.id)) {
    return message.reply(":no_entry_sign: | You don't have the right permissions");
  }
  if (message.member.roles.has(muteRole.id)) {
    return message.reply(":no_entry_sign: | Error. This user is already muted!");
  } else {

    guild.member(message.mentions.users.first()).addRole(muteRole);
    // 313439532903170048
    message.reply(`You have successfully muted ` + user);

    logchannel.send('', {embed: {
      color: 0xff7400,
      fields: [{
        name: "Action Log",
        value: "\u200b"
      },
      {
        name: "Mute",
        value: `${user}\n\u200b`
      },
      {
        name: "Muted by:",
        value: `${message.author}`
      }],
      timestamp: new Date(),
      footer: {
        text: 'Logged by honeydewbot',
      }
    }
    });
  }
};
