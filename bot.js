const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === '&bot') {
    msg.reply('hello
    i created by LORD14GAMER
    I am beta bot i will update my self every day
    to add me contact LORD14GAMER');
  }
});

client.login(process.env.BOT_TOKEN);
