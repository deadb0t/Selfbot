/*Old version of core JS - Deprecated, used for reference*/

var Eris = require("eris");
var config = require("./config.json");
const exec = require('child_process').exec;
const util = require('util');
var bot = new Eris.CommandClient(config.token, {}, {
    name: "Selfbot",
    description: "Coded in Eris",
    owner: "SplitPixl",
    prefix: config.prefix,
    ignoreSelf: false
});

bot.on("ready", () => {
    console.log("Ready as: " + bot.user.username);
});

bot.registerCommand("ping", (msg, args) => {
  if(msg.author.id === bot.user.id){
    bot.editMessage(msg.channel.id, msg.id, "Pong!")
  }
},{
  description: "Pong!",
  fullDescription: "A good way to test if your selfbot is running."
});

bot.registerCommand("nick", (msg, args) => {
  var text = args.join(" ")
  if(msg.author.id === bot.user.id){
    bot.editMessage(msg.channel.id, msg.id, msg.member.nick + " => " + text, () => {
      bot.editNickname(msg.channel.guild.id, text)
    });
  }
},{
  description: "Change your nickname.",
  fullDescription: "A command to change your nickname on a server.",
  usage: "<text>",
  serverOnly: true,
  requirements: {
    permissions:{
      "changeNickname":true
    }
  }
});

bot.registerCommand("play", (msg, args) => {
  var text = args.join(" ");
  if(msg.author.id === bot.user.id){
    bot.editStatus("online", {name: game})
  }
},{
  description: "Sets your \"Playing\" status.",
  fullDescription: "Changes your playing status to text you put in.",
  usage: "<text>"
});

bot.registerCommand("kick", (msg, args) => {
  if(msg.author.id === bot.user.id){
    bot.deleteGuildMember(msg.channel.guild.id, msg.mentions[0].id).catch(function(e){
      bot.editMessage(msg.channel.id, msg.id, "Could not kick " + msg.mentions[0].mention )
    });
  }
},{
  description: "Kick people",
  fullDescription: "Kick someone from the server.",
  usage: "<@mention>",
  serverOnly: true,
  requirements: {
    permissions:{
      "kickMembers":true
    }
  }
});

bot.registerCommand("ban", (msg, args) => {
  if(msg.author.id === bot.user.id){
    bot.editMessage(msg.channel.id, msg.id, "*bent " + msg.mentions[0].username + "#" + message.mentions[0].discriminator + "* 🔨")
    bot.banGuildMember(msg.channel.guild.id, msg.mentions[0].id).catch(function(e){
      bot.editMessage(msg.channel.id, msg.id, "Could not ban " + msg.mentions[0].mention )
    });
  }
},{
  description: "Ban people",
  fullDescription: "Ban someone from the server.",
  usage: "<@mention>",
  serverOnly: true,
  requirements: {
    permissions:{
      "banMembers":true
    }
  }
});

bot.registerCommand("eval", (msg, args) => {
  var code = args.join(" ");
  if(msg.author.id === bot.user.id){
    try{
      bot.editMessage(msg.channel.id, msg.id, "Eval Input:\n```javascript\n" + code + "\n```Output:\n```fix\n" + eval(code) +"```")
    }catch(err){bot.editMessage(msg.channel.id, msg.id, "Input:\n```javascript\n" + code + "\n```Exception:\n```fix\n" + err +"```")}
  }
},{
  description: "Runs Javascript code",
  fullDescription: "Run javascript code, don't use this if you don't know what you are doing.",
  usage: "<code>"
});

bot.registerCommand("exec", (msg, args) => {
  if(msg.author.id === bot.user.id){
    var code = args.join(" ");
    exec(code, function(err, stdout, stderr){
      bot.editMessage(msg.channel.id, msg.id, "\`\`\`\n" + code + "\n=============\n" + stdout +"\n"+ stderr + "\n\`\`\`" )
    });
  }
},{
  description: "Runs shell commands",
  fullDescription: "Run shell commands, don't use if you don't know what you are doing.",
  usage: "<code>"
});

bot.connect();
