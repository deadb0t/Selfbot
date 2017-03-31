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
                        console.log("Registered " + file)
                        commandDB[file.substring(0, file.length - 3)] = content
                        if (!content.hidden) {
                            commandHL.push(file.substring(0, file.length - 3))
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
