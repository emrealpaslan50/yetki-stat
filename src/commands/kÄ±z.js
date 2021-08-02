const Discord = require("discord.js");
const conf = require("../configs/config.json");
const coin = require("../schemas/coin");
module.exports = {
  conf: {
    aliases: [],
    name: "kadın",
    owner: true,
  },

  run: async (client, message, args) => {
    const member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
    if(!member) return;
    await coin.findOneAndUpdate({ guildID: member.guild.id, userID: message.author.id }, { $inc: { kadinUye:1} }, { upsert: true });
}
};