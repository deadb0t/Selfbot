module.exports = {
    "name":"me",
    "description": "PONG!",
    "usage": "",
    "run": function(client, msg, args, config) {
		let does = msg.content.substring((config.prefix + this.name).length + 1, 99999)
        msg.delete()
        client.createMessage(msg.channel.id, {
            content: '',
            embed: {
                color: 0x4B92FB,
                description: `***${client.user.username}** ${does}*`
            }
        })
    }
}
