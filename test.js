const request = require('node-superfetch');
const discord = require('discord.js')
const moment = require('moment')
client = new discord.Client();

const { canModifyQueue, LOCALE } = require("../../util/EvobotUtil");
const i18n = require("i18n");
let txt = (arg) => i18n.__(arg);
let txt_ = (arg, args) => i18n.__mf(arg, args);

i18n.setLocale(LOCALE);

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