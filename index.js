                                   ﻿//title
console.log("");
console.log("");
console.log("");
console.log("");
console.log("");
console.log("");
console.log("");
console.log("");
console.log("");
console.log("");
console.log("               ███████╗███╗   ██╗███████╗    ██████╗  ██████╗ ████████╗    ██╗      ██████╗  █████╗ ██████╗ ███████╗██████╗ ");
console.log("               ╚══███╔╝████╗  ██║╚══███╔╝    ██╔══██╗██╔═══██╗╚══██╔══╝    ██║     ██╔═══██╗██╔══██╗██╔══██╗██╔════╝██╔══██╗");
console.log("                 ███╔╝ ██╔██╗ ██║  ███╔╝     ██████╔╝██║   ██║   ██║       ██║     ██║   ██║███████║██║  ██║█████╗  ██║  ██║");
console.log("                ███╔╝  ██║╚██╗██║ ███╔╝      ██╔══██╗██║   ██║   ██║       ██║     ██║   ██║██╔══██║██║  ██║██╔══╝  ██║  ██║");
console.log("               ███████╗██║ ╚████║███████╗    ██████╔╝╚██████╔╝   ██║       ███████╗╚██████╔╝██║  ██║██████╔╝███████╗██████╔╝");
console.log("               ╚══════╝╚═╝  ╚═══╝╚══════╝    ╚═════╝  ╚═════╝    ╚═╝       ╚══════╝ ╚═════╝ ╚═╝  ╚═╝╚═════╝ ╚══════╝╚═════╝ ");
console.log("");
console.log("");
console.log("");
console.log("");
console.log("");
console.log("");
console.log("");
console.log("");
console.log("");
console.log("");
console.log("");
console.log("");

const botconfig = require("./botconfig.json");
const Discord = require("discord.js");

const bot = new Discord.Client({disableEveryone: true});

//activity
bot.on("ready", async () => {
  bot.user.setActivity("Kepre On Soundcloud", {type: "LISTENING"});
});

bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type == "dm") return;

  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

//roster
  if(cmd === `${prefix}roster`){

    let bicon = bot.user.displayAvatarURL;
    let serverembed = new Discord.RichEmbed()
    .setTitle("Roster Info.")
    .setColor("#FFFFFF")
    .setThumbnail(bicon)
    .addField("This Will Always Be Updated.", "Roster Link: [http://docs.google.com/spreadsheets/d/18Xcll40WR-QR1h8JMHmCAps6_Mag_26rIpf2vQkoOuU/edit?usp=sharing](http://docs.google.com/spreadsheets/d/18Xcll40WR-QR1h8JMHmCAps6_Mag_26rIpf2vQkoOuU/edit?usp=sharing)")
    .setTimestamp()
    .setFooter("Not Xotiic", "https://cdn.discordapp.com/attachments/529857096724774933/660980698068287508/58430454_316927239205610_7711659963751333888_n.jpg");

    return message.channel.send(serverembed);
}

//apply
  if(cmd === `${prefix}apply`){

    let bicon = bot.user.displayAvatarURL;
    let applyembed = new Discord.RichEmbed()
    .setColor("#FFFFFF")
    .setThumbnail(bicon)
    .setTitle("Application Form")
    .addField("This Is For The eSport Teams.", "Apply Here: [https://docs.google.com/forms/d/e/1FAIpQLSekrUe2rIVQFOFlRVHVmrS3IgBy5shAALFZCIIKQS2U-bVELw/viewform?usp=sf_link](https://docs.google.com/forms/d/e/1FAIpQLSekrUe2rIVQFOFlRVHVmrS3IgBy5shAALFZCIIKQS2U-bVELw/viewform?usp=sf_link)")
    .setTimestamp()
    .setFooter("Not Xotiic", "https://cdn.discordapp.com/attachments/529857096724774933/660980698068287508/58430454_316927239205610_7711659963751333888_n.jpg");

    return message.channel.send(applyembed);
  }

//serverinfo
  if(cmd === `${prefix}serverinfo`){

    let sicon = message.guild.iconURL;
    let serverembed = new Discord.RichEmbed()
    .setColor("#FFFFFF")
    .setThumbnail(sicon)
    .addField("Server Name", message.guild.name)
    .addField("Created On", message.guild.createdAt)
    .addField("You Joined", message.member.joinedAt)
    .addField("Total Members", message.guild.memberCount)
    .setTimestamp()
    .setFooter("Not Xotiic", "https://cdn.discordapp.com/attachments/529857096724774933/660980698068287508/58430454_316927239205610_7711659963751333888_n.jpg");

    return message.channel.send(serverembed);
}

//help
  if(cmd === `${prefix}help`){

    let bicon = bot.user.displayAvatarURL;
    let helpembed = new Discord.RichEmbed()
    .setTitle("Here Are The Current Commands.")
    .setDescription("**?roster\n?apply\n?botinfo\n?serverinfo\n?purge**")
    .setColor("#FFFFFF")
    .setThumbnail(bicon)
    .setTimestamp()
    .setFooter("Not Xotiic", "https://cdn.discordapp.com/attachments/529857096724774933/660980698068287508/58430454_316927239205610_7711659963751333888_n.jpg");

    return message.channel.send(helpembed);
  }

//botinfo
  if(cmd === `${prefix}botinfo`){

    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setTitle("Official Not Xotiic By Xotiic#5821")
    .setColor("#FFFFFF")
    .setThumbnail(bicon)
    .addField("Bot Name", bot.user.username)
    .addField("Created On", bot.user.createdAt)
    .setTimestamp()
    .setFooter("Not Xotiic", "https://cdn.discordapp.com/attachments/529857096724774933/660980698068287508/58430454_316927239205610_7711659963751333888_n.jpg");

    return message.channel.send(botembed);
  }

//purge
  if(cmd === `${prefix}purge`) {

    const deleteCount = parseInt(args[0], 10);

    if(!deleteCount || deleteCount < 2 || deleteCount > 100)
      return message.reply("Please provide a number between 2 and 100 for the number of messages to delete");

    const fetched = await message.channel.fetchMessages({limit: deleteCount});
    message.channel.bulkDelete(fetched)
      .catch(error => message.reply(`Couldn't delete messages because of: ${error}`));
  }

});

bot.login(botconfig.token);
