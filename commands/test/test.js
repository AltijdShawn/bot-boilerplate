const { MessageEmbed } = require('discord.js')
module.exports = {
    name: "test",
	description: "test command",
    aliases: [],
    usage: "",
    commandCategory: "",
    cooldownTime: '0',
	async execute(message, args, client, bot) {
		try {
            message.reply("Test command werkt")
        }
        catch(e) {
            console.log("Oh oh! ging nie zo goe of wel?")
        }
	},
};