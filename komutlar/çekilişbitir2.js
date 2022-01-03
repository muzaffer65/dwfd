const ms = require('ms');
const Discord = require('discord.js');
exports.run = async (client, message, args) => {
 if(!message.member.permissions.has('ADMINISTRATOR')) {
    const embed = new Discord.MessageEmbed()
      .setDescription(`Unfortunately you are not authorized to use this command.`)

    message.channel.send(embed);
    return;
  }

    if(!args[0]){
        return message.channel.send(':x: **must provide a sweepstakes ID!**');
    }

    let giveaway = 
    client.giveawaysManager.giveaways.find((g) => g.prize === args.join(' ')) ||
    client.giveawaysManager.giveaways.find((g) => g.messageID === args[0]);

    if(!giveaway){
        return message.channel.send(':x: There is no such raffle on the server **!** `'+ args.join(' ') + '`.');
    }

    client.giveawaysManager.edit(giveaway.messageID, {
        setEndTimestamp: Date.now()
    })
    .then(() => {
        message.channel.send(':x: giveaway will end soon '+(client.giveawaysManager.options.updateCountdownEvery/1000)+' saniye...').then(a => a.delete({timeout: 10000}));
    })
    .catch((e) => {
        if(e.startsWith(`:x: this id is the lottery id ${giveaway.messageID} it's already over.`)){
            message.channel.send(':x: This giveaway has already ended!');
        } else {
            console.error(e);
            message.channel.send('Something went wrong...');
        }
    });

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['giweaway-finish'],
  permLevel: 0
};

exports.help = {
  name: 'giweaway-finish',
  description: 'çekiliş',
  usage: 'giweaway-finish'
};