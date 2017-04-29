const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
client.login(config.token);
const fs = require("fs");


client.on("ready", () => {
  console.log("The bot has successfully started.");
});


// Welcome message (broken)
exports.run = (client, member) => {
  let guild = member.guild;
  let guildServer = guild.name;
  guild.defaultChannel.sendMessage("Welcome ${member.user} to" + guildServer).catch(console.error);
};



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
















/* ******CUSTOM COMMANDS******
client.on("message", (message) => {



  if (!message.content.startsWith(config.prefix)) return;

  if (message.author.bot) return;
// ******SUBMIT VIDEOS (GOOGLE DRIVE) COMMAND******
if (message.content.startsWith(config.prefix + "submit")) {
  message.channel.sendMessage("Share a **Goole Drive Folder** with submit.honeydew@gmail.com. _Make sure the clips are 1080p 60FPS_.");
} else
// ******BOT ACTIVE COMMAND******
  if (message.content.startsWith(config.prefix + "ping")) {
    message.channel.sendMessage("pong");
  } else
// ******DICE COMMAND******
  if (message.content.startsWith(config.prefix + "roll")) {
    let roll = Math.floor(Math.random() * 6) + 1;
    message.reply("You rolled a " + roll);
  } else
// ******MULTIPLICATION COMMAND******
  if (message.content.startsWith(config.prefix + "multiply")) {
    var args = message.content.split(" ").slice(1);
    var mult1 = args[0];
    var mult2 = args[1];
    var equalmult = mult1 * mult2;
    message.reply(mult1 + " x " + mult2 + " = " + equalmult);
  } else
// ******SUBTRACTION COMMAND******
  if (message.content.startsWith(config.prefix + "subtract")) {
    var args = message.content.split(" ").slice(1);
    var sub1 = args[0];
    var sub2 = args[1];
    var equalsub = sub1 - sub2;
    message.reply(sub1 + " - " + sub2 + " = " + equalsub);
  } else
// ******ADDITION COMMAND******  [broken]
/*  if (message.content.startsWith(config.prefix + "add")) {
    var args = message.content.split(" ").slice(1);
    var add1 = args[0];
    var add2 = args[1];
  //  var equaladd = add1 + add2;
    let equaladd = [ add1, add2 ]; parseInt(add1[0])+parseInt(add2[1]);
    //let equaladd = parseInt(add1[0])+parseInt(add2[1]);
    message.reply(add1 + " + " + add2 + " = " + equaladd);
  } else
// ******DIVIDE COMMAND******
  if (message.content.startsWith(config.prefix + "divide")) {
    var args = message.content.split(" ").slice(1);
    var div1 = args[0];
    var div2 = args[1];
    var equaldiv = div1 / div2;
    message.reply(div1 +" / "+ div2 + " = " + equaldiv);
  } else
}); */
