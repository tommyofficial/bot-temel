const Discord = require('discord.js');


exports.run = function(client, message) {
//Komutun Kodları
message.reply('***Api gecikmesi : '+client.ping+'ms***');
};

exports.conf = {
  enabled: true,//True => Komut açık, False => Komut kapalı 
  guildOnly: false, //True => Sadece Servere Özel, False => Heryerde kullanılabilir
  aliases: [],//Komutun farklı kullanımları ÖR: !ping, !p
  permLevel: 0 //kimlerin kullanabileceğini  (bot.js dosyasında perm leveller yazıyor)
};

exports.help = {
  name: 'ping',//Komutun adı (Komutu girerken lazım olucak)
  description: 'Botun pingini gösterir.',//Komutun Açıklaması
  usage: 'ping' //komutun kullanım şekli; ÖR: !ban @Kullanıcı
}
