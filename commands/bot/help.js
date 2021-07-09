const { MessageEmbed } = require("discord.js");
const { readdirSync } = require("fs");

module.exports = {
    name: "help",
	description: "Helps the unhelped",
    aliases: [],
    usage: "",
    commandCategory: "Bot",
    cooldownTime: '0',
	async execute(message, args, client, config) {
		try {
		const commands = message.client.commands.array();
    const categories = message.client.categories.array();

		categories.forEach((cat) => {
		let helpEmbed = new MessageEmbed()
      .setTitle(`${client.user.username} Help ~ *${cat.commandCategory}*`)
      .setDescription("")
      .setColor("#F8AA2A");

    commands.forEach((cmd) => {
			if (cmd.commandCategory == cat.commandCategory) {
      helpEmbed.addField(
        `**${message.client.prefix}${cmd.name} ${cmd.aliases ? `(${cmd.aliases})` : ""}**`,
        `${cmd.description}`,
        true
      );
			//helpEmbed.addField(cmd.commandCategory, cat.name, true);
			}
			else return
    });
		helpEmbed.setTimestamp();

    return message.channel.send(helpEmbed);
		});
    }
    catch(e) {
      console.log("Error:", `\n${e}`)
    }
	},
};
