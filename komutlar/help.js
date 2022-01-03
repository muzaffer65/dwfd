const Discord = require('discord.js')
const moment = require('moment')
const db = require('quick.db')
const ayarlar = require('../ayarlar.json')
const client = new Discord.Client();
require("moment-duration-format");
const prefix = ayarlar.prefix
exports.run = async (bot, msg, args) => {

        const Giweaway = new Discord.MessageEmbed()
                .setColor('RANDOM')
        .setFooter(`${msg.author.username} Successfully Used the Giweaway Command!`, msg.author.avatarURL)
        .setAuthor('Karty Giweaway Menüsü')
        .setThumbnail('https://media.discordapp.net/attachments/853346789946818570/926380989729624084/images_4.jpeg')
        .setDescription('Komutlar/Commands',false)
        .addField('**__Giweaway Start__**','`k!giweaway-start #channel time winner_num Award` \nYou Start a Giweaway on a Specified Channel',false )
        .addField('**__Giweaway Refresh__**','  `k!giweaway-refresh message_id` \n Renews the Lottery on the Specified Id',true)
        .addField('**__Giweaway List__**',' `k!giweaway-list` \nLists Active Sweepstakes on the Server',true)
        .addField('**__Giweaway Finish__**', ' `k!giweaway-finish message_id` \nTerminates the Lottery on the Specified Id.',false)
  
msg.channel.send(Giweaway)
    
}
exports.conf = {
  enabled: true,
  guildOnly: true,
 aliases: ['giweaway', 'help'],
  kategori: 'yardım',
  permLevel: 0
};
exports.help = {
  name: 'Giweaway',
  description: 'İstediğiniz kullanıcını bilgilerini gösterir.',
  usage: 'Giweaway'
};