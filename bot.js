const Discord = require('discord.js');
const client = new Discord.Client();
const preifx = "&"

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
client.user.setStatus("idle");
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
      message.channel.send(`**✅Done**`)
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

    if (message.content === ('&bot')) {

    message.channel.send({

        embed: new Discord.RichEmbed()

            .setAuthor(client.user.username,client.user.avatarURL)

            .setThumbnail(client.user.avatarURL)

            .setColor('RANDOM')

            .addField('**Bot Ping**🚀 :' , [`${Date.now() - message.createdTimestamp}` + 'MS'], true)

            .addField('**Servers**📚 :', [client.guilds.size], true)

            .addField('**Channels**📝 :' , `[ ${client.channels.size} ]` , true)

            .addField('**Users**🔮 :' ,`[ ${client.users.size} ]` , true)

            .addField('**Bot Name**🔰 :' , `[ ${client.user.tag} ]` , true)

            .addField('**Bot Owner**👑 :' , `[<@466672045233799174>]` , true)

            .setFooter(message.author.username, message.author.avatarURL)

    })

}

});




client.on('message', message => {
  if(!message.channel.guild) return;
if(message.content.startsWith("&bc")) {
if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`' );  //OUAIL
let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
let copy = "BC-Bot";
let request = `Requested By ${message.author.username}`;  //OUAIL
if (!args) return message.reply('**يجب عليك كتابة كلمة او جملة لإرسال البرودكاست**');message.channel.send(`**هل أنت متأكد من إرسالك البرودكاست؟ \nمحتوى البرودكاست:** \` ${args}\``).then(msg => {
msg.react('✅')
.then(() => msg.react('❌'))  //OUAIL
.then(() =>msg.react('✅'))  //OUAIL



let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;
let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });  //OUAIL
let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });  //OUAIL
reaction1.on("collect", r => {
message.channel.send(`☑ |   ${message.guild.members.size} يتم ارسال البرودكاست الى عضو `).then(m => m.delete(5000));  //OUAIL
message.guild.members.forEach(m => {
var bc = new  
Discord.RichEmbed()
.setColor('RANDOM')
.setTitle('البرودكاست') .addField('السيرفر', message.guild.name) .addField('المرسل', message.author.username)  //OUAIL
.addField('الرساله', args)  //OUAIL
.setThumbnail(message.author.avatarURL)  //OUAIL
.setFooter(copy, client.user.avatarURL); //OUAIL
m.send({ embed: bc })
msg.delete();  //OUAIL
})
})
reaction2.on("collect", r => {  //OUAIL
message.channel.send(`**Broadcast Canceled.**`).then(m => m.delete(5000));   //OUAIL
msg.delete();  //OUAIL
})  //OUAIL
}) //OUAIL
}  //OUAIL
}) //OUAIL



client.login(process.env.BOT_TOKEN);
