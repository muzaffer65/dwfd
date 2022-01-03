const ms = require('ms');
const Discord = require('discord.js');
exports.run = async (client, message, args) => {
 if(!message.member.permissions.has('ADMINISTRATOR')) {
    const embed = new Discord.MessageEmbed()
      .setDescription(`Unfortunately you are not authorized to use this command.`)
    message.channel.send(embed);
    return;
  }

let messageID = args[0]
    if(!messageID){
        return message.channel.send(':x: **must provide a sweepstakes ID!**');
    }
client.giveawaysManager.reroll(messageID, {
    messages: {
        congrat: ":tada: new winner: {winners}! Congratulations!",
        error: "No valid entries, no winner can be selected!"
                    }   
}).catch((err) => {
    message.channel.send("`"+ messageID +"` I couldn't find a giveaway for you, please check and try again");
})
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['giweaway-refresh'],
  permLevel: 0
};

exports.help = {
  name: 'giweaway-refresh',
  description: 'çekiliş',
  usage: 'giweaway-refresh'
};