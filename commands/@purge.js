exports.run = (client, message, args) => {
  let result = parseInt(args[0]) + 1;
  let resultLog = args[0];
//  let messagecount = parseInt(result);
  let guild = message.guild;
  let modRole = message.guild.roles.find("name", "Mods");

  message.delete(0);

  if (!message.member.roles.has(modRole.id)) {
    return message.reply(":no_entry_sign: | Error. You don't have the right permissions").catch(console.error);
  } else {
    message.channel.bulkDelete(result);
    message.reply("Bulk deleted messages successfully!");

    let logchannel = guild.channels.find("name", "log");

    logchannel.send('', {embed: {
      color: 0xFFFF00,
      fields: [{
        name: "Action Log",
        value: "\u200b"
      },
      {
        name: "Purged:",
        value:  `${resultLog} messages\n\u200b`
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
