  exports.run = (client, message, args) => {
    message.channel.sendEmbed({ color: 3447003,
      title: "Submit Overwatch Clips",
      description: "Want to be in a Honeydew montage? Share a [Gooogle Drive](https://www.drive.google.com) folder with: **submit.honeydew@gmail.com** for a chance to be included!",
      fields: [{
        name: "Requirements:",
        value: "_Make sure your clip(s) are 1080p 60FPS (Clips should be 1080p 60FPS)_"
      },
      {
        name: "How can I record my gameplay?",
        value: "Free programs like [OBS](https://obsproject.com/) and [GeForceExperience](http://www.geforce.com/geforce-experience) (NVIDIA GFX Cards ONLY) can record your games in 1080p 60FPS"
      },
      {
        name: "How do I set it up?",
        value: "There are plenty of tutorials on [YouTube](https://www.youtube.com/results?search_query=how+to+record+1080p+60fps) _If you need more help you can ask in #questions!_"
      }]
    });
  };
