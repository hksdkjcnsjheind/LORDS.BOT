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
      
  if (message.content.startsWith('(prefix))ply')) {
    client.user.setGame(argresult);
      message.channel.send(`**✅   ${argresult}**`)
  } else 
     if (message.content === ("leave")) {
    message.guild.leave();        
  } else  
  if (message.content.startsWith('(prefix)wt')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send(`**✅   ${argresult}**`)
  } else 
  if (message.content.startsWith('mils')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send(`**✅   ${argresult}**`)
  } else 
  if (message.content.startsWith('(prefix)st')) {
    client.user.setGame(argresult, "https://www.twitch.tv/idk");
      message.channel.send(`**✅**`)
  }
  if (message.content.startsWith('(prefix)setname')) {
  client.user.setUsername(argresult).then
      message.channel.send(`Changing The Name To ..**${argresult}** `)
} else
if (message.content.startsWith('(prefix)setavatar')) {
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


client.on('message', message => {

if(message.content.startsWith("&server")){

  if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return message.reply(`**هذه الخاصية للادارة فقط** ❎ `)

if(!message.channel.guild) return message.reply(' ');

const millis = new Date().getTime() - message.guild.createdAt.getTime();

const now = new Date();

dateFormat(now, 'dddd, mmmm dS, yyyy, h:MM:ss TT');

const verificationLevels = ['None', 'Low', 'Medium', 'Insane', 'Extreme'];

const days = millis / 1000 / 60 / 60 / 24;

let roles = client.guilds.get(message.guild.id).roles.map(r => r.name);

var embed  = new Discord.RichEmbed()

.setAuthor(message.guild.name, message.guild.iconURL)

.addField("**🆔 Server ID:**", message.guild.id,true)

.addField("**📅 Created On**", message.guild.createdAt.toLocaleString(),true)

.addField("**👑 Owned by**",`${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`)

.addField("**👥 Members**",`[${message.guild.memberCount}]`,true)

.addField('**💬 Channels **',`**${message.guild.channels.filter(m => m.type === 'text').size}**` + ' text | Voice  '+ `**${message.guild.channels.filter(m => m.type === 'voice').size}** `,true)



client.on("message", message => {

  if (message.content === "&help") {

message.author.send(`**
------Bot-Commands------

&help لعرض هذه القائمة

&top لعرض قائمة المتفاعلين

&bc ارسال رسالة إلى جميع الاعضاء

&id لعرض هويتك الشخصية

&server لعرض معلومات السيرفر

&support لدخول سيرفر الدعم الفني

&invite لدعوة البوت

&قريبا

&قريبا

&قريبا

&قريبا

-----_LORDS BOT_-----

=====================

By LORD14GAMER

=====================

LORD14GAMER جميع الحقوق محفوظة ل

=====================
**`)

      message.channel.send("تفقد الخاص")

  }

});


client.on("message", message => {

  if (message.content === "&invite") {

message.author.send(`**
لدعوة البوت:
https://discordapp.com/oauth2/authorize?client_id=540107214703165440&permissions=8&scope=bot
**`)

      message.channel.send("تفقد الخاص")

  }

});


client.on("message", message => {

  if (message.content === "&support") {

message.author.send(`**
سيرفر الدعم الفني : https://discord.io/LORDSSERVER
**`)

      message.channel.send("تفقد الخاص")

  }

});

  
 
client.on("message", (message) => {

   if (message.content.startsWith("lg!new")) {     

        const reason = message.content.split(" ").slice(1).join(" ");     

        if (!message.guild.roles.exists("name", "Support Team")) return message.channel.send(`This server doesn't have a \`Support Team\` role made, so the ticket won't be opened.\nIf you are an administrator, make one with that name exactly and give it to users that should be able to see tickets.`);

        if (message.guild.channels.exists("name", "ticket-{message.author.id}" + message.author.id)) return message.channel.send(`You already have a ticket open.`);    

        message.guild.createChannel(`ticket-${message.author.username}`, "text").then(c => {

            let role = message.guild.roles.find("name", "Support Team");

            let role2 = message.guild.roles.find("name", "@everyone");

            c.overwritePermissions(role, {

                SEND_MESSAGES: true,

                READ_MESSAGES: true

            });    

            c.overwritePermissions(role2, {

                SEND_MESSAGES: false,

                READ_MESSAGES: false

            });

            c.overwritePermissions(message.author, {

                SEND_MESSAGES: true,

                READ_MESSAGES: true

            });

            message.channel.send(`:white_check_mark: **تم إنشاء تذكرتك ، #${c.name}.**`);

            const embed = new Discord.RichEmbed()

                .setColor(0xCF40FA)

                .addField(`مرحباّ ${message.author.username}!`, `يرجى محاولة شرح سبب فتح هذه التذكرة بأكبر قدر ممكن من التفاصيل. سيكون فريق الدعم لدينا قريبا للمساعدة.`)

                .setTimestamp();

            c.send({

                embed: embed

            });

        }).catch(console.error);

    }

 

 

  if (message.content.startsWith("&close")) {

        if (!message.channel.name.startsWith(`ticket-`)) return message.channel.send(`You can't use the close command outside of a ticket channel.`);

 

        message.channel.send(`هل أنت متأكد؟ بعد التأكيد ، لا يمكنك عكس هذا الإجراء!\n للتأكيد ، اكتب\`&close\`. سيؤدي ذلك إلى مهلة زمنية في غضون 10 ثوانٍ وإلغائها`)

            .then((m) => {

                message.channel.awaitMessages(response => response.content === '&close', {

                        max: 1,

                        time: 10000,

                        errors: ['time'],

                    })   

                    .then((collected) => {

                        message.channel.delete();

                    })    

                    .catch(() => {

                        m.edit('Ticket close timed out, the ticket was not closed.').then(m2 => {

                            m2.delete();

                        }, 3000);

                    });

            });

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

    client.channels.get("527457778684395521").send({embed:iiMo});

    }

});

    
    
    client.on("message", message => {

              var args = message.content.substring(prefix.length).split("*");

              if (message.content.startsWith(prefix + "&clear")) {

                  if(!message.channel.guild) return message.reply('**:x: sorry but this Command for servers only **');         

     if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**?  you dont have perm to clear chat**');

          var msg;

          msg = parseInt();

        

        message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);

        message.channel.sendMessage("", {embed: {

          title: "``chat has bean cleard ``",

          color: 0x06DF00,

          footer: {

            

          }

        }}).then(msg => {msg.delete(3000)});

                            }

  

       

  });
    
