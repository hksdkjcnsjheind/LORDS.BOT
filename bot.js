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

client.login(process.env.BOT_TOKEN);


client.on('message',async message => {

  if(message.author.bot || message.channel.type === 'dm') return;

  let args = message.content.split(' ');

  let member = message.member;

  let mention = message.mentions.users.first();

  let guild = message.guild;

  let author = message.author;

 

  let rPoints = Math.floor(Math.random() * 4) + 1;// Random Points

  tpoints[author.id].points += rPoints;

  if(args[0] === `&top`) {

    let _voicePointer = 1;

    let _textPointer = 1;

    let _voiceArray = Object.values(vpoints);

    let _textArray = Object.values(tpoints);

    let _topText = as(_textArray, 'points', { reverse: true });

    let _topVoice = as(_voiceArray, 'points', { reverse: true });;

    let topRoyale = new Discord.RichEmbed();

    topRoyale.setAuthor(message.author.username, message.author.avatarURL);

    topRoyale.setTitle('&top');

    //topRoyale.setThumbnail(message.guild.iconURL);

    topRoyale.addField(`**TOP 5 TEXT 💬**`, _topText.map(r => `**\`.${_textPointer++}\` | <@${r.id}> \`XP: ${r.points}\`**`).slice(0, 5), true);

    topRoyale.addField(`**TOP 5 VOICE 🎙**`, _topVoice.map(r => `**\`.${_voicePointer++}\` | <@${r.id}> \`XP: ${r.points}\`**`).slice(0, 5), true);

    message.channel.send(topRoyale).catch(e => {

      if(e) return message.channel.send(`**. Error; \`${e.message}\`**`);

    });

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
  if (message.content.startsWith('(&st')) {
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

&top لعرض قائمة المتفاعلين

&bc ارسال رسالة إلى جميع الاعضاء

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

      message.channel.send("تفقد الخاص|✔")

  }

});


client.on("message", message => {

  if (message.content === "&invite") {

message.author.send(`**
لدعوة البوت:
https://discordapp.com/oauth2/authorize?client_id=540107214703165440&permissions=8&scope=bot
**`)

      message.channel.send("تفقد الخاص|✔")

  }

});


client.on("message", message => {

  if (message.content === "&support") {

message.author.send(`**
سيرفر الدعم الفني : https://discord.io/LORDSSERVER
**`)

      message.channel.send("تفقد الخاص|✔")

  }

});



  client.on('message', message => {

   let embed = new Discord.RichEmbed()



    let args = message.content.split(' ').slice(1).join(' ');

     if(!message.channel.guild) return;

if(message.content.split(' ')[0] == '&bc') {

         message.react("✔️")

          let embed = new Discord.RichEmbed()

    .setColor("RANDOM")

    .setThumbnail(message.author.avatarURL)   

                                      .addField('تم الارسال بواسطة :', "<@" + message.author.id + ">")

                 message.channel.sendEmbed(embed);

        message.guild.members.forEach(m => {

            var bc = new Discord.RichEmbed()

.addField('**● Sender  :**', `*** → ${message.author.username}#${message.author.discriminator}***`)

            .addField('***● Server  :***', `*** → ${message.guild.name}***`)               

    .setColor('RANDOM')

                 .addField('ّ', args)

            m.send(``,{embed: bc});

        });

    }

})

  
  
  var prefix = "&";

    client.on('message', message => {

  if (message.author.bot) return;

  if (!message.content.startsWith(prefix)) return;

 

  let command = message.content.split(" ")[0];

  command = command.slice(prefix.length);

 

  let args = message.content.split(" ").slice(1);

 

  if (command == "say") {

if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('?|**\`ADMINISTRATOR**');

 

 

   message.channel.sendMessage(args.join("  "))

   message.delete()

    
    client.on('message', function(message) {

    if (message.channel.type === "dm") {

        if (message.author.id === client.user.id) return;

        var iiMo = new Discord.RichEmbed()

        .setColor('RANDOM')

        .setTimestamp()

        .setTitle('``I have received a new MESSAGE !``')

        .setThumbnail(`${message.author.avatarURL}`)

        .setDescription(`\n\n\`\`\`${message.content}\`\`\``)

        .setFooter(`From **${message.author.tag} (${message.author.id})**`)

    client.channels.get("540487899154743297").send({embed:iiMo});

    }

});

    
    


