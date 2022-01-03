const Discord = require('discord.js')
const moment = require('moment')
const db = require('quick.db')
const ayarlar = require('../ayarlar.json')
const client = new Discord.Client();
require("moment-duration-format");
const prefix = ayarlar.prefix
exports.run = async (bot, msg, args) => {

        const çekiliş = new Discord.MessageEmbed()
                .setColor('RANDOM')
        .setFooter(`${msg.author.username} Başarıyla Çekiliş Komutunu Kullandı!`, msg.author.avatarURL)
        .setAuthor('Karty Çekiliş Menüsü')
        .setThumbnail('https://media.discordapp.net/attachments/853346789946818570/926380989729624084/images_4.jpeg')
        .setDescription('Komutlar/Commands',false)
        .addField('**__Çekliş Başlat__**','`k!çekiliş-başlat #kanal süre kazanan_sayısı Ödül` \nBelirtilen Kanalda Çekiliş Başlatırsınız',false )
        .addField('**__Çekiliş Yenile__**','  `k!çekiliş-yenile mesaj_id` \n Belirtilen İd deki Çekilişi Yeniler',true)
        .addField('**__Çekiliş Liste__**',' `k!çekiliş-liste` \nSunucudaki Aktif Çekilişleri Listeler',true)
        .addField('**__Çekiliş Bitir__**', ' `k!çekiliş-bitir mesaj_id` \nBelirtilen İd deki Çekilişi Sonlandırır.',false)
  
msg.channel.send(çekiliş)
    
}
exports.conf = {
  enabled: true,
  guildOnly: true,
 aliases: ['çekiliş', 'yardım'],
  kategori: 'yardım',
  permLevel: 0
};
exports.help = {
  name: 'çekiliş',
  description: 'İstediğiniz kullanıcını bilgilerini gösterir.',
  usage: 'çekiliş'
};