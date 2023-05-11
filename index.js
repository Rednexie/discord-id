const fs = require("fs");
const consoled = require("consoled.js") // consoled.js by Rednexie
const { Intents, Client, Message, MessageEmbed, Collection, DiscordAPIError } = require("discord.js");

const Discord = require('discord.js');

const path = require("path");
const express = require("express");
const useragent = require("express-useragent");
const http = require("http")
const app = express();
const cors = require("cors")
app.use(cors({
  origin: ['https://yoururl.com'],
  allowedHeaders: ['Content-Type', 'DiscordIdSorgu'],
}))

app.use(express.static("static"))

const client = new Discord.Client({
  intents: 32767,
});



client.login("createanappondiscorddevelopersandpastethetokenhere")

app.get("/api/:id", (req, res) => {
  const userid = req.params.id;

  client.users.fetch(userid).then(user => {
    // Get the user information
    const bot = user.bot;
    const system = user.system;
    const username = user.username;
    const discriminator = user.discriminator;
    const tag = `${user.username}#${user.discriminator}`
    const profilePictureUrl = user.displayAvatarURL({ dynamic: true, format: 'jpeg' });
    const date = user.createdAt.getTime()
    createdAt = new Date(date).toLocaleString('tr-TR', { timeZone: 'Europe/Istanbul' });

    const badges = user.flags.toArray();
    const nitroSubscriptionStatus = user.premiumType ? 'Subscribed' : 'Not subscribed';
    const accentColor = user.accentColor;
    const bannerColor = accentColor ? `#${accentColor.toString(16)}` : null;



    // Send the user information back to the client
    res.send({
      username,
      discriminator,
      system,
      bot,
      tag,
      profilePictureUrl,
      createdAt,
      badges,
      nitroSubscriptionStatus,
      bannerColor
    });
  }).catch(error => {
    console.error(error);
    res.status(500).send('Error fetching user');
  });


})

app.get("/user/:id", (req, res) => {
  const userid = req.params.id;

  client.users.fetch(userid).then(user => {
    // Get the user information
    const bot = user.bot;
    const system = user.system;
    const username = user.username;
    const discriminator = user.discriminator;
    const tag = `${user.username}#${user.discriminator}`
    const profilePictureUrl = user.displayAvatarURL({ dynamic: true, format: 'jpeg' });
    const date = user.createdAt.getTime()
    createdAt = new Date(date).toLocaleString('tr-TR', { timeZone: 'Europe/London' });

    const badges = user.flags.toArray();
    const nitroSubscriptionStatus = user.premiumType ? 'Subscribed' : 'Not Subscribed';
    const accentColor = user.accentColor;
    const bannerColor = accentColor ? `#${accentColor.toString(16)}` : null;



    // Send the user information back to the client
    res.render("sonuc.ejs", {
      id: userid,
      bot: bot,
      system: system,
      username: username,
      discriminator: discriminator,
      tag: tag,
      pfp: profilePictureUrl,
      creation: createdAt,
      date: date,
      badges: badges.join(", "),
      nitro: nitroSubscriptionStatus,
      color: bannerColor

    })
  }).catch(error => {
    console.error(error);
    res.status(500).send('Error fetching user');
  });


})

app.get("/", (req, res) => {
  res.render("index.ejs")
})


const listener = app.listen(80, () => {
  console.log(`Listening on http port ${listener.address().port}`);
});

