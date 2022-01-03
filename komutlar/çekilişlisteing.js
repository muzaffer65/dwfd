const Discord = require('discord.js');
const ms = require('ms');
module.exports.run = async (bot, message, args) => {
    let activeGiveaways = bot.giveawaysManager.giveaways.filter((g) => g.guildID === message.guild.id);
    let giveaways = activeGiveaways.filter((g) => !g.ended);
     if(!message.member.permissions.has('ADMINISTRATOR')) {
    const embed = new Discord.MessageEmbed()
      .setDescription(`Unfortunately you are not authorized to use this command.`)
    message.channel.send(embed);
    return;
  }
    if (giveaways.length === 0) {
      message.channel.send(':x: There are currently no active giveaways on this server.');
      return;
    }

  const embed = new Discord.MessageEmbed()
  .setTitle("" + message.guild.name + " | Giweaway List")
  .setDescription(`${giveaways.map((g) => `**Prize**: ${g.data.prize}
**Winners)**: ${g.data.winnerCount}
**ID**: ${g.messageID}
**Channel**: <#${g.channelID}>`).join("\n\n")}`)
  .setFooter(bot.user.username, bot.user.avatarURL());
 return message.channel.send(embed);
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'giweaway-list',
  description: 'çekiliş',
  usage: 'giweaway-list'
};