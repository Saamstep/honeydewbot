exports.run = (client, message, args) => {
  message.channel.sendEmbed({ color: 3447003,
    title: "Creator:",
    description: "This bot was made by Samstep",
    fields: [{
      name: "Social Links:",
      value: "[Youtube](http://www.bit.ly/subtosamstep) **|** [Twitch](http://www.twitch.tv/saamstep) **|** [Twitter](http://www.twitter.com/saamstep)"

    }]
  });
};