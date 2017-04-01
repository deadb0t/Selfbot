const fs = require('fs');

module.exports = {
    loadCommands: function(commandDB, commandHL, callback) {
        fs.readdir("./commands", function(err, files) {
            if (err && !files) {
                throw new Error("Files are in invalid state: Make sure that the `commands` directory exists and that it contains command files.")
            } else {
                files.forEach(function(file) {
                    if (file.endsWith(".js")) {
                        let content = require(`./commands/${file}`);
                        console.log("Registered " + content.name)
                        commandDB[content.name] = content
                        if (!content.hidden) {
                            commandHL.push(content.name)
                        }
                    } else {
                        console.log(`Skipping non-command entity ${file}.`)
                    }
                });
                // Run the callback, specified in params
                callback(commandDB);
            }
        })
        
    }
}
