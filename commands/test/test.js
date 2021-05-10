const { MessageEmbed } = require('discord.js')
module.exports = {
    name: "test",
	description: "test command",
    aliases: [],
    usage: "",
    commandCategory: "",
    cooldownTime: '0',
	async execute(message, args, client, config) {
		try {
            message.reply("Test command werkt")
        }
        catch(e) {
            console.log("Error:", `\n${e}`)
        }
	},
};
