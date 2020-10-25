const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");

let prefix = config.prefix;

client.on('ready', () => {
    console.log(`Holi`);
 });
 
 client.on('message', (message) => {
    if(message.content.startsWith(prefix + 'ping')) {
        message.channel.send(`pong 🏓!!`);
   }
 
 });
 
 client.login(config.token);