const { MessageEmbed } = require('discord.js')
module.exports = {
    name: "invite",
	description: "test command",
    aliases: [],
    usage: "",
    commandCategory: "",
    cooldownTime: '0',
	async execute(message, args, client, config) {
        try {
            let Link = `https://discord.com/api/oauth2/authorize?client_id=${config['id'] || client.user.id}&permissions=0&scope=bot`;
            const Embed = new MessageEmbed()
                .setTitle(`${client.user.username} invite`)
                .setDescription(`Click [Here](${Link}) To invite the bot`)
            message.reply(Embed)
        }
        catch(e) {
            console.log("Error: ", `\n\n${e}`)
        }
	},
};