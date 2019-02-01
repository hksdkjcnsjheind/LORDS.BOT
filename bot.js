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







**' )

                          setTimeout(() => {

                            m.delete()

                          }, 10000);

                          m.channel.awaitMessages( m1 => m1.author == message.author,{ maxMatches: 1, time: 60*1000 } ).then ( (m4) => {

                              m4 = m4.first();

                              var ask2 = m4.content;

                              m4.delete();

                              message.channel.send( message.member + ', **:timer:**').then( (m) =>{

                                m.edit( message.member + ', **لماذا يجب علينا ان نقبلك ؟ اعطنا سبباً وجيهاً **' )

                                m.channel.awaitMessages( m1 => m1.author == message.author,{ maxMatches: 1, time: 60*1000 } ).then ( (m5) => {

                                    m5 = m5.first();

                                    var ask3 = m5.content;

                                    m5.delete();

                                    message.channel.send( message.member + ', **:timer:**').then( (m) =>{

                                      m.edit( message.member + ', **ماهو مستواك في الدسكورد خبرتك في الإدارة و كم لك في الدسكورد؟**' )

                                      m.channel.awaitMessages( m1 => m1.author == message.author,{ maxMatches: 1, time: 60*1000 } ).then ( (m6) => {

                                          m6 = m6.first();

                                          var ask4 = m6.content;

                                          m6.delete();

              m.edit(message.member + ', **....جارى جمع البيانات**').then( (mtime)=>{

                setTimeout(() => {

                  let embed = new Discord.RichEmbed()

                .setColor('RANDOM')

                .setTitle(`**تقديم ادارة** [__**${message.guild.name}**__]`)

                .addField('**`الاسم`**', `${name}` , true)

                .addField('**`العمر`**', `${age}` , true)

                .addField('**`هل سيتفاعل ؟`**',`${ask}`)

                .addField('**`هل سيحترم القوانين ؟`**',`${ask2}`)

                .addField('**`لماذا يجب علينا قبوله ؟`**',`${ask3}`)

                .addField('**`مستواه في الدسكورد؟`**',`${ask4}`)

                .setFooter(`<@${message.author.id}> `,'https://images-ext-2.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif')

                channel.send(embed)

                }, 2500);

                setTimeout(() => {

                  mtime.delete()

                }, 3000);

 

          })

        })

        })

      })

    })

  })

})

})

      })

  })


})

    })

  }

}

  });

client.on('message', message=>{

    if(message.content.startsWith("&روم1")) {

    if(!message.channel.guild) return;

        if(message.author.bot) return;

        if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply("**تحتاج الى `ADMINISTRATOR`**");

        message.guild.createChannel("التقديمات", "text").then(c =>{

            c.overwritePermissions(message.guild.id, {

                SEND_MESSAGES: false

 

                  })

        })

message.channel.send("** تم انشاء روم التقديمات بنجاح**")

    }

    })

client.on('message',async message => {

let mention = message.mentions.members.first();

let role = message.content.split(" ").slice(2).join(" ");

let mySupport = message.guild.roles.find('name',role);

if(message.content.startsWith("&قبول")) {

let acRoom = message.guild.channels.find('name', 'القبول-الرفض');

if(!acRoom) return message.reply("&روم2 \n من فضلك انشاء روم **القبول-الرفض** او اكتب الامر");

if(acRoom) {

if(!message.guild.member(message.author).hasPermission("MANAGE_ROLES")) return;

if(!mention) return message.reply('منشن شخص');

if(!role) return message.reply('ادخل اسم رتبة');

if(!mySupport) return message.reply('هذه الرتبة غير موجودة');

if(mention.roles.has(mySupport)) return message.reply('هذا الشخص معه الرتبة مسبقا');

 

mention.addRole(mySupport).then(() => {

acRoom.send(`**[ ${mySupport} ] واعطائك رتبة ${mention} تم بنجاح قبولك**`);

});

}

}

});

client.on('message',async message => {

let mention = message.mentions.members.first();


acRoom.send(`**${mention} تم رفضك للاسف**`)

}

});

  client.on('message', message=>{

    if(message.content.startsWith("&روم2")) {

 if(!message.channel.guild) return;

        if(message.author.bot) return;

        if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply("**تحتاج الى `MANAGE_CHANNELS`**");

        message.guild.createChannel("القبول-الرفض", "text").then(c =>{

            c.overwritePermissions(message.guild.id



