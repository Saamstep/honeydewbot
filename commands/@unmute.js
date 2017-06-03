exports.run = (client, message, args) => {

  let modRole = message.guild.roles.find("name", "Mods");
  let muteRole = message.guild.roles.find("name", "Muted");
  let guild = message.guild;
  let user = message.mentions.users.first();
  let logchannel = guild.channels.find("name", "log");
  
  if (!message.member.roles.has(modRole.id)) {
    return message.reply(":no_entry_sign: | Error. You don't have the right permissions").catch(console.error);
  } else {
    guild.member(message.mentions.users.first()).removeRole(muteRole).catch(error => console.log(error));
    // 313439532903170048
    message.reply(`You have successfully unmuted ` + user);

    logchannel.send('', {embed: {
      color: 44242,
      fields: [{
        name: "Action Log",
        value: "\u200b"
      },
      {
        name: "UnMute",
        value: `${user}\n\u200b`
      },
      {
        name: "UnMuted by:",
        value: `${message.author}`
      }],
      timestamp: new Date(),
      footer: {
        text: 'Logged by honeydewbot',
      }
    }
    });
  }};
