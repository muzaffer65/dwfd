const ms = require('ms')
const Discord = require('discord.js');
const ayarlar = require("../ayarlar.json");
exports.run = async (client, message, args) => { 
let prefix = ayarlar.prefix 
 if(!message.member.permissions.has('ADMINISTRATOR')) {
    const embed = new Discord.MessageEmbed()
      .setDescription(`Unfortunately you are not authorized to use this command.`)
    message.channel.send(embed);
    return;
  }
    let giveawayChannel = message.mentions.channels.first();
    if(!giveawayChannel){
        return message.channel.send(`:x: Please indicate a **channel**, **winner** and **prize**!\nExample usage: \`${prefix}giveaway-start #channel 1h 1 Nitro Classic\``);
    }

    let giveawayDuration = args[1];
    if(!giveawayDuration || isNaN(ms(giveawayDuration))){
        return message.channel.send(`:x: Please indicate a **channel**, **winner** and **prize**!\nExample usage: \`${prefix}giveaway-start #channel 1h 1 Nitro Classic\``);
    }

    let giveawayNumberWinners = args[2];
    if(isNaN(giveawayNumberWinners)){
        return message.channel.send(`:x: Please indicate a **channel**, **winner** and **prize**!\nExample usage: \`${prefix}giveaway-start #channel 1h 1 Nitro Classic\``);
    }

    let giveawayPrize = args.slice(3).join(' ');
    if(!giveawayPrize){
        return message.channel.send(`:x: Please indicate a **channel**, **winner** and **prize**!\nExample usage: \`${prefix}giveaway-start #channel 1h 1 Nitro Classic\``);
    }

 client.giveawaysManager.start(giveawayChannel, {
            time: ms(giveawayDuration),
            prize: giveawayPrize,
            winnerCount: giveawayNumberWinners,
            hostedBy: message.author,
            messages: {
            giveaway: "ð **GÄ°WEAWAY** ð",
                giveawayEnded: "ð **GIWEAWAY ENDED** ð",
                timeRemaining: "Remaining time: **{duration}**!",
                inviteToParticipate: "ð Join by pressing the emoji!",
                winMessage: "ð Congratulations, {winners}! **{prize}** you've won your prize!",
                embedFooter: "Giweaway",
                noWinner: "a winner could not be determined!",
                hostedBy: "raffle sponsor: {user}",
                winners: "Winners",
                endedAt: "End date",
units: {
                    seconds: "seconds",
                    minutes: "minutes",
                    hours: "hours",
                    days: "Days",
                    pluralS: false 
                }
            }
        });

    message.channel.send(`ð **Giweaway** ${giveawayChannel} Launched on channel!`).then(a => a.delete({timeout: 10000}));
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['giweaway-start'],
  permLevel: 0
};

exports.help = {
  name: 'giweaway-start',
  description: 'Ã§ekiliÅ',
  usage: 'giweaway-start'
};
