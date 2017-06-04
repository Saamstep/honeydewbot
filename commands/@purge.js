exports.run = (client, message, args) => {
  let result = args.join(' ');
  let messagecount = parseInt(result);
  let guild = message.guild;
  let modRole = message.guild.roles.find("name", "Mods");
  if (!message.member.roles.has(modRole.id)) {
    return message.reply(":no_entry_sign: | Error. You don't have the right permissions").catch(console.error);
  } else {
    message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    message.reply("Bulk deleted messages successfully!");
    let logchannel = guild.channels.find("name", "log");
    console.log(message.channel + " BULK DELETED IN");
    logchannel.send('', {embed: {
      color: 44242,
      fields: [{
        name: "Action Log",
        value: "\u200b"
      },
      {
        name: "Purged",
        value: `${result} messages\n\u200b`
      },
      {
        name: "By:",
        value: `${message.author}\n\u200b`
      },
      {
        name: "Channel:",
        value: `${message.channel}`
      }],
      timestamp: new Date(),
      footer: {
        text: 'Logged by honeydewbot',
      }
    }
    });
  }};
