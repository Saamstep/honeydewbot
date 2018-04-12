const Discord = require("discord.js");
const client = new Discord.Client();
const bot = new Discord.Client();
const config = require("./config.json");
client.login(config.token);
const fs = require("fs");


client.on("ready", () => {
  client.user.setGame("!@help").catch(console.error);
  console.log("The bot has successfully started");
});



// This loop reads the /events/ folder and attaches each event file to the appropriate event.
fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    let eventFunction = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    // super-secret recipe to call events with all their proper arguments *after* the `client` var.
    client.on(eventName, (...args) => eventFunction.run(client, ...args));

  });
});
// YT Video like system
client.on("message", message => {
  if (message.content.includes(`youtube.com/watch?v=`))
  {
    message.react(`👍`);
  }

  if (message.content.includes(`youtu.be`))
  {
    message.react(`👍`);
  }

  if (message.content.includes(`submit.honeydew@gmail.com`))
  {
    message.react(`✅`);
  }

  if (message)

    if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);
  // The list of if/else is replaced with those simple 2 lines:

  try {
    let commandFile = require(`./commands/${command}.js`);
    commandFile.run(client, message, args);
  } catch (err) {
    return;
  }
});



client.on("guildMemberAdd", member => {

  member.guild.defaultChannel.send(`**Welcome to the server** ${member}`);

  const channel = member.guild.channels.find("name", "member-log");
  if (!channel) return;
  // Send the message, mentioning the member
  channel.send(`**Welcome to the server** ${member}**!**`);
});

client.on("guildMemberRemove", member => {
  let guild = member.guild;
  guild.defaultChannel.send(`**See you later** ${member.user.username}`);
});

client.on("guildBanAdd",(guild, user) => {
  let logchannel = guild.channels.find("name", "log");
  logchannel.send('', {embed: {
    color: 0xf0000,
    author: {
      name: "A user was banned!"
    },
    title: '\nUsername:',
    description: `${user.username}`,
    timestamp: new Date(),
    footer: {
      text: 'Logged by honeydewbot'
    }
  }
  });
});

client.on('guildBanRemove',(guild, user) => {
  let logchannel = guild.channels.find("name", "log");
  logchannel.send('', {embed: {
    color: 0xff0000,
    author: {
      name: "A user was unbanned!"
    },
    title: '\nUsername:',
    description: `${user.username}`,
    timestamp: new Date(),
    footer: {
      text: 'Logged by honeydewbot'
    }
  }
  });
});
