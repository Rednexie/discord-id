# discord-id
tool to get info about discord id's

# Functionality & Features


User Info:


username,
discriminator,
is system?,
is bot?,
tag,
profile picture,
account creation date,
badges,
nitro subscription status,
banner color
and account age.


Guild Info:


name, splash url, description, total members, online members, profile picture, server creation date, features, and server age.

# Endpoints


/api/your-discord-id => Gives the info as JSON


/ => Asks for a discord id.


/info/ => Gives the info in website


# Usage & Setup
Install required dependencies:


*npm i fs express discord.js@13 consoled.js@1.0.4 ejs cors*


Get a discord bot token, then create an environment variable:


*export TOKEN="your-discord-bot-token"* for linux / mac


*set TOKEN="your-discord-bot-token"* for windows cmd 


*$env:TOKEN="your-discord-bot-token"* for windows powershell


This will secure your token on platforms like replit or codesandbox.


*node .* to run the script



