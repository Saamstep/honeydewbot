exports.run = (client, message, args) => {
  let reportedUser = message.mentions.users.first();
  let guild = message.guild;
  let reportOptions = args[0];
  let reportType = args[1];
  let logchannel = guild.channels.find("name", "log");
  var reportSys = function(reportedUser, reportType) {
  /*  if (reportType === 1) {
      var reportTypeConverted = "Bullying/Harrasment";
    }
    if (reportType === 2) {
      var reportTypeConverted = "Racism";
    }
    if (reportType === 3) {
      var reportTypeConverted = "Blackmail";
    }
    if (reportType === 4) {
      var reportTypeConverted = "Inapropriate DMs";
    }
    if (reportType === 5) {
      var reportTypeConverted = "Spam";
    }
    if (reportType === 6) {
      var reportTypeConverted = "Advertising";
    }
    if (reportType === 7) {
      var reportTypeConverted = "Bad Attitude";
    } */

    logchannel.send('', {embed: {
      color: 0x8B0000,
      fields: [{
        name: "Report",
        value: "\u200b"
      },
      {
        name: "Reporter:",
        value: `${message.author}\n\u200b`
      },
      {
        name: "Reported User:",
        value: `${reportedUser}\n\u200b`
      },
      {
        name: "Report Type:",
        value: `${reportType}\n\u200b`
      }
      ],
      timestamp: new Date(),
      footer: {
        icon_url: client.user.avatarURL,
        text: "Report.sys by honeydewbot"
      }
    }
    });
  };

/*  if (!reportedUser) {
    return message.reply(":no_entry_sign: | That user does not seem valid");
  } */
  if (reportType > 7) {
    message.delete(0);
    return message.author.send("`" + reportType + "` is not a correct report! Do `!report types` to see all the reports (DM'ing commands do not work!)");
  }
  if (reportOptions === "types") {
    message.channel.send('', {embed: {
      color: 0x8B0000,
      fields: [{
        name: "Report Types",
        value: "\u200b"
      },
      {
        name: "1",
        value: `Bullying/Harrasment`
      },
      {
        name: "2",
        value: `Racism`
      },
      {
        name: "3",
        value: `Blackmail`
      },
      {
        name: "4",
        value: "Inapropriate DMs"
      },
      {
        name: "5",
        value: "Spam"
      },
      {
        name: "6",
        value: "Advertising"
      },
      {
        name: "7",
        value: "Bad Attitude"
      }
      ],
      footer: {
        icon_url: client.user.avatarURL,
        text: "DO NOT abuse this command. Abusing this command may result in a ban."
      }
    }
    }
);}

  if (reportType <= 7) {
    message.delete(0);
    reportSys(reportedUser, reportType);
    message.author.send(":printer: | You're report about " + reportedUser + " has been recived. If the issue does become more serious please Direct message a moderator. If is very serious, report abuse to discord (https://support.discordapp.com/hc/en-us/articles/115002334127-Contacting-Abuse-Support). You can also change your privacy settings (https://support.discordapp.com/hc/en-us/articles/217916488-Blocking-Privacy-Settings).");
  }
};
