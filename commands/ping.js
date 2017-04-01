var pingResp = require('../util/pingResp.json')

module.exports = {
    "name":"ping",
    "description": "PONG!",
    "usage": "",
    "run": function(client, msg, args, config) {
		  msg.edit(`${pingResp[Math.floor((Math.random() * pingResp.length))]} | ${msg.channel.guild.shard.latency}ms.`);
    }
}
