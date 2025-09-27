const mineflayer = require('mineflayer')

function startBot() {
    const bot = mineflayer.createBot({
        host: process.env.MC_SERVER,
        port: process.env.MC_PORT || 25565,
        username: process.env.MC_EMAIL,
        auth: "microsoft"
    })

    bot.on('login', () => {
        console.log(`Bot logged in as ${bot.username}`)
    })

    bot.on('end', () => {
        console.log(`Bot disconnected. Reconnecting in ${process.env.RECONNECT_INTERVAL || 5000}ms...`)
        setTimeout(startBot, parseInt(process.env.RECONNECT_INTERVAL || 5000))
    })

    bot.on('kicked', (reason) => {
        console.log(`Kicked: ${reason}`)
    })

    bot.on('error', (err) => {
        console.log(`Error: ${err}`)
    })
}

startBot()
