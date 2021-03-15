const Discord = require('discord.js'); //You need this for bot working "discord.js" npm i discord.js

client.on('guildMemberAdd', guildMember =>{

    let Role = guildMember.guild.roles.cache.find(role => role.name === 'Role_name'); //role for new users

    guildMember.roles.add(Role); //role give

    setTimeout(function(){
        guildMember.guild.channels.cache.get('Channel_id').send(`Your message`)//Welcome message 
    }, 1000); 

    //`${guildMember.user.id}` -joining user mention    
})