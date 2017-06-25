exports.run = (client, message, args) => {

  let username = args[0];
  let region = args[1];
  let platform = args[2];
  var request = require('request');



  var url = `http://ow-api.herokuapp.com/profile/${platform}/${region}/${username}`;

  request(url, function(err, response, body) {
    if(err) {
      console.log(err);
      return message.reply("Error getting Overwatch stats.");
    }
    if (!username) {
      return message.channel.send("Error! Please provide a username\n\n`!owstats <Username>-<BNET#> <region> <platform>`");
    }
    if (!region) {
      return message.channel.send("Error! Please provide a region\n\n`!owstats <Username>-<BNET#> <region> <platform>`");
    }
    if (!platform) {
      return message.channel.send("Error! Please provide a platform\n\n`!owstats <Username>-<BNET#> <region> <platform>`");
    }
    body = JSON.parse(body);
    let WinPercent = body.games.competitive.won / body.games.competitive.played;
    let finalWinPercent = WinPercent.toString().substring(2, 4);


    const embed = {
      "description": "More stats for " + `[${username}](https://www.overbuff.com/players/pc/Samstep-1428)` + "",
      "color": 0x9900,
      "thumbnail": {
        "url": `${body.competitive.rank_img}`
      },
      "author": {
        "name": `${body.username}'s Stats`,
        "icon_url": "https://i.imgur.com/0RIw2RB.png"
      },
      "fields": [
        {
          "name": "Region",
          "value": `${region.toUpperCase()}`
        },
        {
          "name": "Platform",
          "value": `${platform.toUpperCase()}`
        },
        {
          "name": "Level",
          "value": `${body.level}`
        },
        {
          "name": "Rank",
          "value": `${body.competitive.rank}`
        },
        {
          "name": "Competitive Win Percentage",
          "value": `${finalWinPercent}%`
        }
      ]
    };
    message.channel.send({ embed });

  });

};
