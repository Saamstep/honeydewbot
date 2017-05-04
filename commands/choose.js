exports.run = (client, message) => {
  let chooseVal = Math.floor((Math.random() * 2 ) + 1);
  if (chooseVal == 2) {
    let data1 = args[0];
    let data2 = args[1];
    message.reply("I choose " + data1);
  } else {
    message.reply("I choose " + data2);
  }

};
