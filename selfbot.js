var Eris = require("eris"),
    config = require("./config.json");

const exec = require('child_process').exec,
      util = require('util');
    

var client = new Eris(config.token),
    commandManager = require('./commandLoader.js'),
    commandDB = {},
    commandHL = [];

client.on("ready", () => {
    console.log(
       `Running - ${client.user.username} on ${client.guilds.size} servers.`
    );
});

function init(commandDB) {
    client.on("messageCreate", (msg) => { 
        if (msg.author.id != client.user.id) return; // Don't remove this line under ANY circumstance.      
        if (msg.content.startsWith(config.prefix)) {
            var commandScrub = msg.content.substring(config.prefix.length, 99);
            var _args = commandScrub.split(" ");
            var args = commandScrub.substring(config.prefix.length + _args[0].length + 1999).split(" ")
            if (commandScrub.startsWith("help")) {
                if (args[1]) {
                    if (commandDB.hasOwnProperty(_args[1])) {
                        msg.edit(
                            `**Command**: \`${_args[1]}\`\n\n`+ 
                            `${commandDB[_args[1]].description.trim() ? `**Description:** \`${commandDB[_args[1]].description}\`` : `\`No Description! D:\``}\n` + 
                            `${commandDB[_args[1]].usage.trim() ? `**Usage:** \`${config.prefix}${_args[0]} ${commandDB[_args[1]].usage}\`\n` : ``}`
                        )
                    }
                }
                else {
                    msg.delete()
                    client.createMessage(msg.channel.id, {
                            embed: {
                                title:"Selfbot Commands",
                                description: `\`\`\`diff\n${commandHL.join(", ")}\`\`\`\`For more on each command do \`${config.prefix}\``
                            }
                        })
                }
            }
            else {
                if (commandDB.hasOwnProperty(_args[0])) {
                    commandDB[_args[0]].run(client, msg, args, config)
                }  
                
                
            }     
        }
    })
}

commandManager.loadCommands(commandDB, commandHL, function(commandDB) {
    init(commandDB)
});

client.connect()
