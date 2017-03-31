var pingResp = require('../util/pingResp.json')

module.exports = {
    "description": "PONG!",
    "usage": "",
    "run": function(client, msg, args) {
		msg.edit(`${pingResp[Math.floor((Math.random() * pingResp.length))]} | ${msg.channel.guild.shard.latency}ms.`);
    }
}
