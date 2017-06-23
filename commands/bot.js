exports.run = (client, message, args) => {
  const config = require("../config.json");
  message.channel.sendEmbed({ color: 3447003,
    title: "Creator:",
    description: "This bot was made by Samstep",
    fields: [{
      name: "Social Links:",
      value: "[YouTube](http://www.bit.ly/subtosamstep) **|** [Twitch](http://www.twitch.tv/saamstep) **|** [Twitter](http://www.twitter.com/saamstep) **|** [GitHub](http://www.github.com/saamstep/honeydewbot)"
    },
    {
      name: "Bot Version:",
      value: `${config.version}`
    }
    ]

  });
};
