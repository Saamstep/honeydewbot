exports.run = (client, message, args) => {

  let modRole = message.guild.roles.find("name", "Mods");
  let guild = message.guild;
  let user = message.mentions.users.first();
  if (!message.member.roles.has(modRole.id)) {
    return message.reply(":no_entry_sign: | Error. You don't have the right permissions").catch(console.error);
  } else {
    guild.member(message.mentions.users.first()).removeRole('313439532903170048').catch(error => console.log(error));
    message.reply(`You have successfully muted ` + user);

    let logchannel = guild.channels.find("name", "log");
    logchannel.send('', {embed: {
      color: 44242,
      author: {
        name: "A user was unmuted!"
      },
      title: '\nUsername:',
      description: `${user.username}`,
      timestamp: new Date(),
      footer: {
        text: 'Logged by honeydewbot'
      }
    }
    });
  }};
