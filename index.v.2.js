if(command === "play") {
 return message.reply("say +start to start the game") 
 
 // game will expired in a minute if cilent didn't say "start"
 
 const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});

client.login('your-token-goes-here');
 
    
