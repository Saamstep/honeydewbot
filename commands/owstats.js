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
    let compWins = body.competitive.win;
    let compPlayed = body.competitive.played;
    let WinPercent = compWins / compPlayed;


    const embed = {
      "description": "Powered by [overwatch-api](https://ow-api.herokuapp.com/docs/).",
      "color": 0x9900,
      "thumbnail": {
        "url": "http://www.sanjaywebdesigner.com/articles/wp-content/uploads/2015/02/rank-your-website-faster-in-2015.jpg"
      },
      "author": {
        "name": `${body.username}'s Stats`,
        "icon_url": "http://i.imgur.com/YZ4w2ey.png"
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
          "value": `${WinPercent}`
        }
      ]
    };
    message.channel.send({ embed });

  });

};
