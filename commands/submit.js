  exports.run = (client, message, args) => {
    message.channel.sendEmbed({ color: 3447003,
      title: "Submit Overwatch Clips",
      description: "Want to be in a Honeydew montage? Share a [Gooogle Drive](drive.google.com) folder with: **submit.honeydew@gmail.com** for a chance to be included!",
      fields: [{
        name: "Requirements:",
        value: "_Make sure your clip(s) are 1080p 60FPS (Clips that are not 1080p 60FPS will not be accepted)_"

      }]
    });
  };
