const token = require('./config.js').token
const { ShardingManager } = require('discord.js');
const manager = new ShardingManager('./bot.js', { token: token });

manager.on('shardCreate', shard => console.log(`Launched shard ${shard.id}`));
manager.spawn();