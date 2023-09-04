// no-console.js by rednexie
// https://rednexie.github.io/no-console.js
// https://github.com/Rednexie/no-console.js
const log = false; // log to discord webhook?
const block = true; // block the actions?
const rightclick = false; // disable right click? 
const disable = true; // disable javascript autocorrect and console output?
const delay = 500; // default delay in ms(used in disable)
const text = "\nhttps://github.com/Rednexie/no-console.js"

const WebhookURL = "https://discord.com/api/webhooks/" // your discord server's webhook url

var ip = "0.0.0.0"
fetch("https://ip.rednexie.repl.co/text").then(res => res.text()).then(data => ip = data);
// open source ip api: https://github.com/Rednexie/ip



console.log("%c                                                                                                                                                                         \n                                                                                                                                                                     \n                                                                                                                                                                     \n                                                                                                                                                                     \n                                                                                                                                                                     \n                                                                                                                                                                     ", "color: black; background-image: linear-gradient(to right, #ff0000,#ff8000,#ffff00,#80ff00,#00ff00,#0080ff,#0000ff,#8000ff,#aa00ff); color: gray");
console.log('%c \n https://github.com/Rednexie/no-console.js', 'font-size: 16px; color: blue; text-decoration: none   ; cursor: pointer;');
console.log("%c                                                                                                                                                                         \n                                                                                                                                                                     \n                                                                                                                                                                     \n                                                                                                                                                                     \n                                                                                                                                                                     \n                                                                                                                                                                     ", "color: black; background-image: linear-gradient(to right, #ff0000,#ff8000,#ffff00,#80ff00,#00ff00,#0080ff,#0000ff,#8000ff,#aa00ff); color: gray");



function webhook(url,description,event){
    const request = new XMLHttpRequest();
                request.open("POST", url);
                request.setRequestHeader('Content-type', 'application/json');
                const params = {
                  username: "No-Console.js",
                  avatar_url: "https://imglog.infinityfreeapp.com/kali-bright.jpg",
                  content: "User IP Address: " + userip + "\n" + description + text,
                  embeds: [
                        {
                            "type": "rich",
                            "title": `The URL`,
                            "description": event,
                            "color": 0x00FFFF,
                            "url": window.location.href,
    
    
    
                        }
                  ]
              }
              request.send(JSON.stringify(params))
}


document.addEventListener("keydown", (event) => {
    if(event.keyCode == 123){
        

        const description = 'User with the ip address above has clicked F12 to open Developer Tools on their browser.\nNo-Console.js has logged the action.';
        const events = 'F12 - Developer tools';
        if(block == true) event.preventDefault();
        else{
            console.warn("no-console.js has not blocked the action. Please make sure to configure it if you want it to block the action.")
        }
        if(log == true) webhook(WebhookURL,description,events)

        console.error("[no-console.js] " + events)
    }


    if(event.ctrlKey == true && event.keyCode == 83){
        

        const description = 'User with the ip address above has clicked CTRL + S to save the page source on their browser.\nNo-Console.js has logged the action.';
        const events = 'CTRL + S - Save Page Source';
        if(block == true) event.preventDefault();
        else{
            console.warn("no-console.js has not blocked the action. Please make sure to configure it if you want it to block the action.")
        }
        if(log == true) webhook(WebhookURL,description,events)

        console.error("[no-console.js] " + events)
    }

    if(event.shiftKey == true && event.ctrlKey == true && event.keyCode == 73){
        

        const description = 'User with the ip address above has clicked CTRL + Shift + I to open Elements on their browser.\nNo-Console.js has logged the action.';
        const events = 'CTRL + Shift + I - Elements';
        if(block == true) event.preventDefault();
        else{
            console.warn("no-console.js has not blocked the action. Please make sure to configure it if you want it to block the action.")
        }
        if(log == true) webhook(WebhookURL,description,events)

        console.error("[no-console.js] " + events)
    }

    if(event.shiftKey == true && event.ctrlKey == true && event.keyCode == 74){
        

        const description = 'User with the ip address above has clicked CTRL + Shift + J to open Javascript Console on their browser.\nNo-Console.js has logged the action.';
        const events = 'CTRL + Shift + J - Javascript Console';
        if(block == true) event.preventDefault();
        else{
            console.warn("no-console.js has not blocked the action. Please make sure to configure it if you want it to block the action.")
        }
        if(log == true) webhook(WebhookURL,description,events)

        console.error("[no-console.js] " + events)
    }
    
    if(event.ctrlKey == true && event.keyCode == 85){
        

        const description = 'User with the ip address above has clicked CTRL + U to open View Page Source on their browser.\nNo-Console.js has logged the action.';
        const events = 'CTRL + U - View Page Source';
        if(block == true) event.preventDefault();
        else{
            console.warn("no-console.js has not blocked the action. Please make sure to configure it if you want it to block the action.")
        }
        if(log == true) webhook(WebhookURL,description,events)

        console.error("[no-console.js] " + events)
    }

    if(event.ctrlKey && event.shiftKey && event.key === 'K'){
        

        const description = 'User with the ip address above has clicked CTRL + Shift + K to open Firefox Console on their browser.\nNo-Console.js has logged the action.';
        const events = 'CTRL + Shift + K - Firefox Console';
        if(block == true) event.preventDefault();
        else{
            console.warn("no-console.js has not blocked the action. Please make sure to configure it if you want it to block the action.")
        }
        if(log == true) webhook(WebhookURL,description,events)

        console.error("[no-console.js] " + events)
    }

    if(event.ctrlKey && event.shiftKey && event.key === 'C'){
        

        const description = 'User with the ip address above has clicked CTRL + Shift + C to open Firefox Elements on their browser.\nNo-Console.js has logged the action.';
        const events = 'CTRL + Shift + C - Firefox Elements';
        if(block == true) event.preventDefault();
        else{
            console.warn("no-console.js has not blocked the action. Please make sure to configure it if you want it to block the action.")
        }
        if(log == true) webhook(WebhookURL,description,events)

        console.error("[no-console.js] " + events)
    }
    
})





document.addEventListener("contextmenu", (event) => {
    const events = "Right Click - Context Menu"
    const description = "User with the ip address above has clicked Right Click to open Context Menu on their browser.\nNo-Console.js logged blocked the action."
    if(rightclick !== true) {
        console.warn("no-console.js has not blocked the action. Please make sure to configure it if you want it to block the action.")
        console.error("[no-console.js] " + events)
        return
    } 
    if(log == true) webhook(WebhookURL,description,events)
    event.preventDefault()
})



if(disable == true){
    setInterval(() => {
        console.clear()
        console.log("%c                                                                                                                                                                         \n                                                                                                                                                                     \n                                                                                                                                                                     \n                                                                                                                                                                     \n                                                                                                                                                                     \n                                                                                                                                                                     ", "color: black; background-image: linear-gradient(to right, #ff0000,#ff8000,#ffff00,#80ff00,#00ff00,#0080ff,#0000ff,#8000ff,#aa00ff); color: gray");
        console.log('%c \n https://github.com/Rednexie/no-console.js', 'font-size: 16px; color: blue; text-decoration: none   ; cursor: pointer;');
        console.log("%c                                                                                                                                                                         \n                                                                                                                                                                     \n                                                                                                                                                                     \n                                                                                                                                                                     \n                                                                                                                                                                     \n                                                                                                                                                                     ", "color: black; background-image: linear-gradient(to right, #ff0000,#ff8000,#ffff00,#80ff00,#00ff00,#0080ff,#0000ff,#8000ff,#aa00ff); color: gray");
        document.designMode = 'off'
    },delay)
}
