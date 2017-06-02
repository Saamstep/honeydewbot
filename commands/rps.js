exports.run = (client, message, args) => {
  let userInput = args[0];
  let pcInput = Math.floor((Math.random() * 3 ) + 1);
  let correctVal = ["rock", "paper", "scissors"];

  // Check val.

  if(userInput === correctVal[0])
  {

    return message.reply("ok");

  } else if(userInput === correctVal[1])
  {

    return message.reply("ok");

  } else if(userInput === correctVal[2])
  {

    return message.reply("ok");

  } else if(userInput !== correctVal) {
    return message.reply(":no_entry_sign: | Please input: `rock | paper | scissors`");
  }

  var botChoose = function()
  {
    if (pcInput === 1) {
      let pcVal = "rock";
    } else if(pcInput === 2) {
      let pcVal = "paper";
    } else if(pcInput === 3) {
      let pcVal = "scissors";
    }
  };

  var game = function ()
    {
    message.send("The :robot: is choosing a random object...");
    botChoose();
    message.send("The :robot: chose: " + pcVal);   // variables cannot be grabbed from another function.. fix.
  };

};
