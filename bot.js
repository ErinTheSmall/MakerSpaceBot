const Discord = require('discord.js');
 const client = new Discord.Client();

client.on('ready', () => {
 console.log(`Logged in as ${client.user.tag}!`);
 });


var pats = ["https://tenor.com/view/charlotte-pat-blush-embarrassed-shy-gif-5081286", "https://files.mastrchef.rocks/src/gif/pats/8FE2DCBF.gif", "https://imgur.com/RIiVFEr", "https://tenor.com/view/pat-pat-on-head-gif-12018857", "https://i.redd.it/1ljjsdz1sas21.gif", "https://media1.tenor.com/images/5acabebf2ee0e1e7f22afff644943cad/tenor.gif?itemid=12649717", "https://tenor.com/view/headpat-pat-anime-gif-10092582", "https://tenor.com/view/pat-anime-gif-7453915", "https://files.mastrchef.rocks/src/gif/pats/1F514315.gif", "https://files.mastrchef.rocks/src/gif/pats/6A7284F9.gif", "https://files.mastrchef.rocks/src/gif/pats/7E2D6445.gif", "https://files.mastrchef.rocks/src/gif/pats/6AF79836.gif", "https://files.mastrchef.rocks/src/gif/pats/BE401C16.gif", "https://files.mastrchef.rocks/src/gif/pats/E5CEFC90.gif", "https://files.mastrchef.rocks/src/gif/pats/EF065C8B.gif", "https://files.mastrchef.rocks/src/gif/pats/F0352BB4.gif", "https://files.mastrchef.rocks/src/gif/pats/F4A01C5A.gif", "https://files.mastrchef.rocks/src/gif/pats/F99F63C0.gif"];

 const embedroles = {
   "color": 16765404,
   "thumbnail": {
     "url": "https://cdn.discordapp.com/icons/545582017920761876/851d8083760024c41010caaabbd3939c.png?"
   },
   "author": {
     "name": "Roles:",
     "icon_url": ""
   },
   "fields": [
     {
       "name": "󠀀󠀀󠀀󠀀Pronoun Roles:",
       "value": "󠀀󠀀󠀀󠀀<@&545991544084365322>󠀀\n<@&545991776377503766>\n<@&545991396910432256>\n<@&545992117537734667>\n<@&546025135195291671>\n"
     },
     {
       "name": "Role colours:",
       "value": "<@&547527021253754885>\n<@&547528942404370462>\n<@&547503280855449610>\n<@&547529026466742273>\n<@&547503210882138112>\n<@&547529144594989068>\n<@&547527339312021514>\n<@&547529238605987953>\n<@&547503446383656974>\n<@&547529333560967199>\n<@&547513959415283712>\n<@&547529405149347841>\n<@&547529549110312983>\n<@&547503355463860226>"
     },

     {
       "name": "󠀀󠀀\nHow to get them:",
       "value": "Ping an <@&545586525426155541> and ask! (We're working on a bot :p)\n"
     },
     {
       "name": "󠀀󠀀\nOther Pronouns:",
       "value": "If your pronouns don't line up with any of the roles, ping a Moderator and we'll add them! <:transheart:546015841225932800>"
     }
   ]
 };





 const embedrules = {
   "color": 10937595,
   "thumbnail": {
     "url": "https://cdn.discordapp.com/icons/545582017920761876/851d8083760024c41010caaabbd3939c.png?"
   },
   "author": {
     "name": "Rules:",
     "icon_url": ""
   },
   "fields": [
     {
       "name": "󠀀󠀀 ",
       "value": "```fix\n󠀀󠀀- Be kind to each other\n\n- Respect the pronouns of others\n\n- No Transphobia, Homophobia, or any form of bigotry\n\n- No slurs\n\n- Nothing NSFW\n\n- Try to use constructive criticism\n\n- Non-targeted swearing is allowed, just don't go overboard ```\nAnd lastly, be yourself!   <:transheart:546015841225932800>"
     }
   ]
 };




 client.on("message", (message) => {
   if (message.content.startsWith("!embedrules")) {
     message.channel.send({ embed: embedrules });
   } else if (message.content.startsWith("!embedroles")) {
     message.channel.send({ embed: embedroles });
   } else if (message.content.startsWith("!embedwelcome")) {
     message.channel.send({ embed: embedwelcome });
   } else if (message.content.includes("Erinbot")) {
      message.channel.send('Helo, that me');
   } else if (message.content.includes("!meltmaya")) {
     var randomPat = pats[Math.floor(Math.random() * pats.length)];
      message.channel.send('<@&539470724222681154> pls give pats I added the space '+ randomPat);
   } else if (message.content.startsWith("!spacepurge")) {
      message.channel.send(`.　　　　　　　　　　 ✦ 　　　　   　 　　　˚　　　　　　　　　　　　　　*　　　　　　   　　　　　　　　　　　　　　　.　　　　　　　　　　　　　　. 　　 　　　　　　　 ✦ 　　　　　　　　　　 　 ‍ ‍ ‍ ‍ 　　　　 　　　　　　　　　　　　,　　   　

.　　　　　　　　　　　　　.　　　ﾟ　  　　　.　　　　　　　　　　　　　.

　　　　　　,　　　　　　　.　　　　　　    　　　　 　　　　　　　　　　　　　　　　　　 :sunny:️ 　　　　　　　　　　　　　　　　　　    　      　　　　　        　　　　*　　　　　　　　　. 　　　　　　　　　　.　　　　　　　　　　　　　. 　　　　　　　　　　　　　　　　       　   　　　　 　　　　　　　　　　　　　　　　       　   　　　　　　　　　　　　　　　　       　    ✦ 　   　　　,　　　　　　　　　*　　    :rocket: 　　　　 　　,　　　 ‍ ‍ ‍ ‍ 　 　　　　　　　　　　　　.　　　　　 　　 　　　.　　　　　　　　　　　　　 　           　　　　　　　　　　　　　　　　　　　˚　　　 　   　　　　,　　　　　　　　　　　       　    　　　　　　　　　　　　　　　　.　　　  　　    　　　　　 　　　　　.　　　　　　　　　　　　　.　　　　　　　　　　　　　　　* 　　   　　　　　 ✦ 　　　　　　　         　        　　　　 　　 　　　　　　　 　　　　　.　　　　　　　　　　　　　　　　　　.　　　　　    　　. 　 　　　　　.　　　　 :new_moon: 　　　　　   　　　　　.　　　　　　　　　　　.　　　　　　　　　　   　

　˚　　　　　　　　　　　　　　　　　　　　　ﾟ　　　　　.　　　　　　　　　　　　　　　. 　　 　 :earth_americas: ‍ ‍ ‍ ‍ ‍ ‍ ‍ ‍ ‍ ‍ ,　 　　　　　　　　　　　　　　* .　　　　　 　　　　　　　　　　　　　　.　　　　　　　　　　 ✦ 　　　　   　 　　　˚　　　　　　　　　　　　　　*　`);
    message.channel.send(`.　　　　　　　　　　 ✦ 　　　　   　 　　　˚　　　　　　　　　　　　　　*　　　　　　   　　　　　　　　　　　　　　　.　　　　　　　　　　　　　　. 　　 　　　　　　　 ✦ 　　　　　　　　　　 　 ‍ ‍ ‍ ‍ 　　　　 　　　　　　　　　　　　,　　   　

.　　　　　　　　　　　　　.　　　ﾟ　  　　　.　　　　　　　　　　　　　.

　　　　　　,　　　　　　　.　　　　　　    　　　　 　　　　　　　　　　　　　　　　　　 :sunny:️ 　　　　　　　　　　　　　　　　　　    　      　　　　　        　　　　*　　　　　　　　　. 　　　　　　　　　　.　　　　　　　　　　　　　. 　　　　　　　　　　　　　　　　       　   　　　　 　　　　　　　　　　　　　　　　       　   　　　　　　　　　　　　　　　　       　    ✦ 　   　　　,　　　　　　　　　*　　    :rocket: 　　　　 　　,　　　 ‍ ‍ ‍ ‍ 　 　　　　　　　　　　　　.　　　　　 　　 　　　.　　　　　　　　　　　　　 　           　　　　　　　　　　　　　　　　　　　˚　　　 　   　　　　,　　　　　　　　　　　       　    　　　　　　　　　　　　　　　　.　　　  　　    　　　　　 　　　　　.　　　　　　　　　　　　　.　　　　　　　　　　　　　　　* 　　   　　　　　 ✦ 　　　　　　　         　        　　　　 　　 　　　　　　　 　　　　　.　　　　　　　　　　　　　　　　　　.　　　　　    　　. 　 　　　　　.　　　　 :new_moon: 　　　　　   　　　　　.　　　　　　　　　　　.　　　　　　　　　　   　

　˚　　　　　　　　　　　　　　　　　　　　　ﾟ　　　　　.　　　　　　　　　　　　　　　. 　　 　 :earth_americas: ‍ ‍ ‍ ‍ ‍ ‍ ‍ ‍ ‍ ‍ ,　 　　　　　　　　　　　　　　* .　　　　　 　　　　　　　　　　　　　　.　　　　　　　　　　 ✦ 　　　　   　 　　　˚　　　　　　　　　　　　　　*　`);
 }
 });

 client.on('guildMemberAdd', member => {
   const embedwelcomepersonalised = {
     "color": 16765404,
     "thumbnail": {
       "url": "https://cdn.discordapp.com/icons/545582017920761876/851d8083760024c41010caaabbd3939c.png?"
     },
     "author": {
       "name": "WELCOME TO THE SERVER!",
       "icon_url": ""
     },
     "fields": [
       {
         "name": "󠀀󠀀󠀀󠀀 󠀀",
         "value": "Hiya, "+member.user.username+"\nPlease head over to <#545984811391647787> and have a read, maybe check out <#545989826923724800> while you're there!\n\nOnce you're ready, ping an <@&545586525426155541> and confirm that you've read the rules and agree to follow them. \n\n(You can also ask a Moderator to assign you roles) "
       },
       {
         "name": "󠀀\n󠀀󠀀We hope you enjoy your time here!     <:transheart:546015841225932800>",
         "value": "󠀀󠀀 󠀀"
       }
     ]
   };

    member.guild.channels.get('545994616667635762').send("<@"+member.id+">\n",{embed: embedwelcomepersonalised});
});
client.on('error', (err) => {
   console.log(err.message)
});



 client.login(process.env.BOT_TOKEN);
