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

client.on("message", message => {
  const ytdl = require('ytdl-core');
  if (message.content.startsWith('++play')) {
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) return message.reply(`Please be in a voice channel first!`);
    voiceChannel.join()
      .then(connnection => {
        const stream = ytdl("https://www.youtube.com/watch?v=dQw4w9WgXcQ", { filter: 'audioonly' });
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => voiceChannel.leave());
      });
  }
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
    console.error(err);
  }
});
