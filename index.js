const log = require("./modules/log")

const fs = require("fs");
const express = require("express");
const { Client, DiscordAPIError } = require("discord.js");
const consoled = require("consoled.js");
const ejs = require("ejs");
const cors = require("cors");
const app = express();

const token = process.env.TOKEN || "";

app.use(cors());

app.use(express.static("static"))

app.set("view engine","ejs");
app.set("json spaces",2)

const client = new Client({
    intents: 32767,
});

client.login(token);

app.get("/", async (req, res) => {
    res.render("index")
});


app.get("/api/:id", async (req, res) => {
    const userid = req.params.id.trim();
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    if(isNaN(Number(userid))) return res.status(400).json({
      status: "error",
      message: "id should be a number",
      code: "400",
    })
    if(userid.length !== 18 && userid.length !== 19) return res.status(400).json({
      status: "error",
      message: "id length should be equal to either 18 or 19",
      code: "400",
    })
    
    log(`\n${ip == "::1" ? "127.0.0.1" : ip.replace("::ffff:")} => ${userid} | ${new Date().toLocaleString("tr-TR")}`)

    consoled.bright.blue(`\nAPI: ${ip == "::1" ? "127.0.0.1" : ip.replace("::ffff:")} => ${userid} | ${new Date().toLocaleString("tr-TR")}`)

    client.users.fetch(userid).then(user => {
        // Get the user information
        const bot = user.bot;
        const system = user.system;
        const username = user.username;
        const discriminator = user.discriminator;
        const tag = `${user.tag.endsWith("#0") ? user.tag.replace("#0","") : user.tag}`
        const pfp = user.displayAvatarURL({ dynamic: true, format: 'jpeg' });
        const date = user.createdAt.getTime()
        createdAt = new Date(date).toLocaleString('tr-TR', {/* timeZone: 'Europe/Istanbul' */});
        const id = userid;
        const badges = user.flags.toArray();
        const nitro = user.premiumType ? true : false;
        const accentColor = user.accentColor;
        const bannerColor = accentColor ? `#${accentColor.toString(16)}` : null;
    
    
        res.set('Content-Type', 'application/json');
    
        res.json({
          status: "success",
          data: {
            id,
            username,
            discriminator,
            system,
            bot,
            tag,
            pfp,
            createdAt,
            timezone: "UTC",
            badges,
            nitro,
            bannerColor
          },
          code: 200,
        });
    
    
      }).catch(error => {
        client.fetchGuildPreview(userid).then(preview => {
          const keys = Object.keys(preview);
          const dcsonuc = {
            id: preview.id,
            name: preview.name,
            splash: preview.splashURL(),
            description: preview.description,
            members: preview.approximateMemberCount,
            onlinemembers: preview.approximatePresenceCount,
            features: preview.features,
            creation: preview.createdAt.toLocaleString("tr-TR", {/* timeZone: 'Europe/Istanbul' */}),
            timezone: "UTC",
            date: preview.createdAt.getTime()
    
    
          }
    
          return res.json({
            status: "success",
            data: dcsonuc,
            code: 200,
          })
    
    
        }).catch(err => {
          res.status(404).json({
            status: "error",
            message: "user or server not found",
            code: 404,
          })
        })
      })
    
})

app.get("/info/:id", (req, res) => {
    const userid = req.params.id.trim();
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    if(isNaN(Number(userid))) return res.status(400).send("Discord Id should be a number.")
      if(userid.length !== 18 && userid.length !== 19) return res.status(400).json("Discord Id length should be 18 or 19.")
      
      log(`\n${ip == "::1" ? "127.0.0.1" : ip.replace("::ffff:")} => ${userid} | ${new Date().toLocaleString("tr-TR")}`)

      consoled.bright.green(`\nWEB: ${ip == "::1" ? "127.0.0.1" : ip.replace("::ffff:")} => ${userid} | ${new Date().toLocaleString("tr-TR")}`)
    client.users.fetch(userid).then(user => {
        // Get the user information
        const bot = user.bot;
        const system = user.system;
        const username = user.username;
        const discriminator = user.discriminator;
        const tag = `${user.username}#${user.discriminator}`
        const pfp = user.displayAvatarURL({ dynamic: true, format: 'jpeg' });
        const date = user.createdAt.getTime()
        createdAt = new Date(date).toLocaleString('tr-TR', {/* timeZone: 'Europe/Istanbul' */});
        const id = userid;
        const badges = user.flags.toArray();
        const nitro = user.premiumType ? true : false;
        const accentColor = user.accentColor;
        const bannerColor = accentColor ? `#${accentColor.toString(16)}` : null;
        res.setHeader("Content-Type", "text/html")
        res.render("sonuc",{
            id,
            username,
            discriminator,
            system,
            bot,
            tag,
            pfp,
            createdAt,
            timezone: "UTC",
            badges,
            nitro,
            bannerColor
        });
    
    
      }).catch(error => {
        client.fetchGuildPreview(userid).then(preview => {

          const dcsonuc = {
            id: preview.id,
            name: preview.name,
            splash: preview.splashURL(),
            description: preview.description,
            members: preview.approximateMemberCount,
            onlinemembers: preview.approximatePresenceCount,
            features: preview.features,
            creation: preview.createdAt.toLocaleString("tr-TR", {/* timeZone: 'Europe/Istanbul' */}),
            timezone: "UTC",
            date: preview.createdAt.getTime()
    
    
          }
    
          return res.render("server", dcsonuc)
    
    
        }).catch(err => {
            return res.status(404).send("Not found")
        })
      })
})


const listener = app.listen(3000, () => {
    consoled.brightus.yellow("https://github.com/Rednexie/discord-id")
    consoled.bright.cyan(`Listening on http port ${listener.address().port}`);
  });
