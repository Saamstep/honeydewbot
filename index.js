const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
client.login(config.token);


client.on("ready", () => {
  console.log("Sucessful startup");
});

client.on("message", (message) => {
  // Set the prefix

// ******CUSTOM COMMANDS******
  if (!message.content.startsWith(config.prefix)) return;

  if (message.author.bot) return;
// ******SUBMIT VIDEOS (GOOGLE DRIVE) COMMAND******
  if (message.content.startsWith(config.prefix + "submit")) {
    message.channel.sendMessage("message");
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
  } else */
// ******DIVIDE COMMAND******
  if (message.content.startsWith(config.prefix + "divide")) {
    var args = message.content.split(" ").slice(1);
    var div1 = args[0];
    var div2 = args[1];
    var equaldiv = div1 / div2;
    message.reply(div1 +" / "+ div2 + " = " + equaldiv);
  }
});
