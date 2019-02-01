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

      message.channel.send("تفقد الخاص|💯")

  }

});


client.on("message", message => {

  if (message.content === "&invite") {

message.author.send(`**
لدعوة البوت:
https://discordapp.com/oauth2/authorize?client_id=540107214703165440&permissions=8&scope=bot
**`)

      message.channel.send("تفقد الخاص|💯")

  }

});


client.on("message", message => {

  if (message.content === "&support") {

message.author.send(`**
سيرفر الدعم الفني : https://discord.io/LORDSSERVER
**`)

      message.channel.send("تفقد الخاص|💯")

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



client.on("message", message => {

    if(message.content.startsWith("&تقديم")) {

if(!message.channel.guild) return;

        if(message.author.bot) return;

let channel = message.guild.channels.find("name", "التقديمات")

    if(channel) {

    message.channel.send( message.member + ', **:timer:**').then( (m) =>{

      m.edit( message.member + ', **اسمك **' )

      m.channel.awaitMessages( m1 => m1.author == message.author,{ maxMatches: 1, time: 60*1000 } ).then ( (m1) => {

          m1 = m1.first();

          var name = m1.content;

          m1.delete();

          m.edit(message.member + ', **:timer:**').then( (m) =>{

              m.edit( message.member + ', **عندك كام سنة **' )

              setTimeout(() => {

                m.delete()

              }, 10000);

              m.channel.awaitMessages( m2 => m2.author == message.author,{ maxMatches: 1, time: 60*1000 } ).then ( (m2) => {

                  m2 = m2.first();

                  var age = m2.content;

                  m2.delete()

                  message.channel.send( message.member + ', **:timer:**').then( (m) =>{

                    m.edit( message.member + ', **هل ستتفاعل فى الرومات الصوتيه و الكتابية ؟ 🎙**' )

                    setTimeout(() => {

                      m.delete()

                    }, 10000);

                    m.channel.awaitMessages( m1 => m1.author == message.author,{ maxMatches: 1, time: 60*1000 } ).then ( (m3) => {

                        m3 = m3.first();

                        var ask = m3.content;

                        m3.delete();

                        message.channel.send( message.member + ', **:timer:**').then( (m) =>{

                          m.edit( message.member + ', **هل ستحترم القوانين ؟ 📑**' )

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

if(message.content.startsWith("&رفض")) {

if(!message.channel.guild) return;

let acRoom = message.guild.channels.find('name', 'القبول-الرفض');

if(!acRoom) return message.reply(" &روم2 \n من فضلك انشاء روم **القبول-الرفض** او اكتب الامر");

if(!message.guild.member(message.author).hasPermission("MANAGE_ROLES")) return;

if(!mention) return message.reply("منشن شخص");

 

acRoom.send(`**${mention} تم رفضك للاسف**`)

}

});

  client.on('message', message=>{

    if(message.content.startsWith("&روم2")) {

 if(!message.channel.guild) return;

        if(message.author.bot) return;

        if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply("**تحتاج الى `MANAGE_CHANNELS`**");

        message.guild.createChannel("القبول-الرفض", "text").then(c =>{

            c.overwritePermissions(message.guild.id, {

                SEND_MESSAGES: false

 

                  })

        })

message.channel.send("** تم انشاء روم القبول والرفض بنجاح**")

    }

})


 
client.login('BOT_TOKEN');


const replyForMention = [

    "ايش تبي",

    "سوي +help",

    "احد ناداني؟",

    "لمعرفة اوامري اكتب `&help`",

    "كيفك",

    "تمنشن بوت ياغبي؟",

    "لا تزعجني",

    "هلا"

    "انا صنعت من قبل LORD14GAMER"

]

client.on('message', message=> {

    if (message.author.bot) return;

    if (message.isMentioned(client.user))

    {

    message.reply(replyForMention);

    }

});



client.on("ready", () => {

  function Rainbow() {

    client.guilds.get('540443557605933058').roles.find("name", "Rainbow").setColor("RANDOM");

  };

  setInterval(Rainbow, 1000);

});



client.on("ready", () => {

  function Rainbow() {

    client.guilds.get('536321001886318622').roles.find("name", "Rainbow").setColor("RANDOM");

  };

  setInterval(Rainbow, 1000);

});


client.on('guildCreate', guild => {

   

  client.channels.get("540813528517443594")

 const embed = new Discord.RichEmbed()

   .setAuthor(`دخلت سيرفر جديد ✅`)

   .setDescription(`**

 اسم السيرفر: __${guild.name}__

 ايدي السيرفر: __${guild.id}__

 صاحب السيرفر: __${guild.owner}__

عدد الاعضاء: __${guild.memberCount}__

 عدد السيرفرات الي فيها البوت  : __${client.guilds.size}__**`)

         .setColor("RANDOM")

         .addField("سيرفر جديد")

         .setFooter('Devilbot' , client.user.avatarURL)

           client.channels.get("540813528517443594").send({embed}); //Sup

 }
