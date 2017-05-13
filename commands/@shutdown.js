exports.run = (client, message, args) => {
  let admin = message.guild.roles.find("name", "Supreme Commander");
  if (!message.member.roles.has(admin.id)) {
    return message.reply(":no_entry_sign: | Error. You don't have the right permissions").catch(console.error);
  }
  client.destroy((err) => {
    console.log("====================");
    console.log("Command: [!@shutdown] run by " + message.author.username);
    console.log("====================");
    console.log(err);
  });
};
