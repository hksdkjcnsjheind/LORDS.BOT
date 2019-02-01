const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);

});

client.on('message', msg => {
  if (msg.content === '&bot') {
    msg.reply('hello i created by LORD14GAMER I am beta bot i will update my self every day||to add me contact LORD14GAMER');
  }
});



client.on('ready',  () => {
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~'); 
  console.log('by LORD14GAMER');
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
  console.log(`Logged in as  * [ " ${client.user.username} " ] servers! [ " ${client.guilds.size} " ]`);
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
  console.log('is online')
client.user.setStatus("dnd");
});






const devs = ["466672045233799174"];
const adminprefix = ["&"];
client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!devs.includes(message.author.id)) return;
      
  if (message.content.startsWith('&ply')) {
    client.user.setGame(argresult);
      message.channel.send(`**✅   ${argresult}**`)
  } else 
     if (message.content === ("leave")) {
    message.guild.leave();        
  } else  
  if (message.content.startsWith('&wt')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send(`**✅   ${argresult}**`)
  } else 
  if (message.content.startsWith('&ls')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send(`**✅   ${argresult}**`)
  } else 
  if (message.content.startsWith('&st')) {
    client.user.setGame(argresult, "https://www.twitch.tv/idk");
      message.channel.send(`**✅**`)
  }
  if (message.content.startsWith('&setname')) {
  client.user.setUsername(argresult).then
      message.channel.send(`Changing The Name To ..**${argresult}** `)
} else
if (message.content.startsWith('&setavatar')) {
  client.user.setAvatar(argresult);
    message.channel.send(`Changing The Avatar To :**${argresult}** `);
}
});


client.on('guildCreate', guild => {

    var embed = new Discord.RichEmbed()

    .setColor(0x5500ff)

    .setDescription(`**شكراً لك لإضافه البوت الى سيرفرك**`)

        guild.owner.send(embed)

  });


client.on("message", msg => {

  if(msg.content === '&' + "id") {

      const embed = new Discord.RichEmbed();

  embed.addField("🔱| اسم الحساب :", `${msg.author.username}#${msg.author.discriminator}`, true)

          .addField("🆔| الاي دي :", `${msg.author.id}`, true)

          .setColor("RANDOM")

          .setFooter(msg.author.username , msg.author.avatarURL)

          .setThumbnail(`${msg.author.avatarURL}`)

          .setTimestamp()

          .setURL(`${msg.author.avatarURL}`)

          .addField('📛| الحالة :', `${msg.author.presence.status.toUpperCase()}`, true)

          .addField('🎲| بلاينج :', `${msg.author.presence.game === null ? "No Game" : msg.author.presence.game.name}`, true)

          .addField('🏅| الرتب : ', `${msg.member.roles.filter(r => r.name).size}`, true)

          .addField('📅| تم الانضمام للديسكورد في :', `${msg.createdAt}`,true)

          .addField('🤖| هل هو بوت ؟', `${msg.author.bot.toString().toUpperCase()}`, true);

      msg.channel.send({embed: embed})

  }

});


client.on("guildMemberAdd", member => {

  member.createDM().then(function (channel) {

  return channel.send(`🌹  ولكم نورت السيرفر🌹 

👑اسم العضو  ${member}👑  

انت العضو رقم ${member.guild.memberCount} `) 

}).catch(console.error)

})



client.on("message", message => {

  if (message.content === "&help") {

message.author.send(`**
-------------Bot-Commands-------------

&help لعرض هذه القائمة

I &قريبا    تقديم

&bc   قريبا

&id لعرض هويتك الشخصية

&server لعرض معلومات السيرفر

&support لدخول سيرفر الدعم الفني

&invite لدعوة البوت

&soon قريبا

&soon قريبا

&soon قريبا

&soon قريبا

-----------_LORDS BOT_--------------

=============================

By LORD14GAMER

==============================

LORD14GAMER جميع الحقوق محفوظة ل

==============================
**`)

      message.channel.send("☑تفقد الخاص")

  }

});


client.on("message", message => {

  if (message.content === "&invite") {

message.author.send(`**
لدعوة البوت:
https://discordapp.com/oauth2/authorize?client_id=540107214703165440&permissions=8&scope=bot
**`)

      message.channel.send("☑تفقد الخاص")

  }

});


client.on("message", message => {

  if (message.content === "&support") {

message.author.send(`**
سيرفر الدعم الفني : https://discord.io/LORDSSERVER
**`)

      message.channel.send("|☑تفقد الخاص")

 }

});



client.on('message', message => {

    var prefix = '&'

    if (message.content.startsWith(prefix + "uptime")) {

    message.channel.send({

        embed: new Discord.RichEmbed()

            .addField('Uptime', timeCon(process.uptime()), true)

            .addField('RAM Usage', `${(process.memoryUsage().rss / 1048576).toFixed()}MB`, true)

            .addField('Guild Count', client.guilds.size, true)

    })

}

});

client.login(process.env.BOT_TOKEN);
