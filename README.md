# SimpleAFK

**SimpleAFK** is a lightweight AFK bot for Minecraft servers, built on [mineflayer](https://github.com/PrismarineJS/mineflayer).  
It connects to your server and keeps you logged in – perfect for AFK farms, chunk loading, or similar use cases.

---

## ✨ Features
- 🚀 Easy setup with Docker  
- 🔄 Automatic reconnect on disconnect  
- 🔑 Microsoft Account login (OAuth2)  
- 📜 Simple configuration via environment variables  
- 🖥️ Cross-platform (runs anywhere with Docker)  

---

## 📦 Getting Started

### Requirements
- Installed [Docker](https://docs.docker.com/get-docker/)  
- Access to a Minecraft server with a valid Microsoft account  

### Installation & Usage

1. **Clone the repository**
   ```bash
   git clone https://github.com/Lxca128/SimpleAFK.git
   cd SimpleAFK
   ```

2. **Build the Docker image**
   ```bash
   docker build -t simple-afk .
   ```

3. **Run the container**  
   Example with all required environment variables:
   ```bash
   docker run --name=SimpleAFK -d -e MC_SERVER="127.0.0.1" -e MC_PORT=25565 -e MC_EMAIL="bot@example.com" -e RECONNECT_INTERVAL=10000  simple-afk
   ```

4. **Check logs**
   ```bash
   docker logs -f SimpleAFK
   ```

5. **Authenticate**  
   - Open the link from the logs in your browser  
   - Enter the displayed code  
   - Sign in with your Microsoft account  

6. ✅ Done! The bot is now connected to your server.  

---

## 🛑 Stopping & Restarting the Bot

- **Stop the bot:**
  ```bash
  docker stop SimpleAFK
  ```

- **Restart the bot:**
  ```bash
  docker start SimpleAFK
  ```

---

## ⚙️ Configuration

Main **environment variables**:

| Variable             | Description                                    | Default  |
|----------------------|------------------------------------------------|----------|
| `MC_SERVER`          | IP or hostname of the Minecraft server         | *none*   |
| `MC_PORT`            | Port of the server (e.g. `25565`)              | *none*   |
| `MC_EMAIL`           | Microsoft account email address                | *none*   |
| `RECONNECT_INTERVAL` | Time between reconnect attempts (milliseconds) | `10000`  |

---

## 🔧 Technology

This project is powered by:
- [**mineflayer**](https://github.com/PrismarineJS/mineflayer) – a powerful Node.js library for Minecraft bots  
- **Docker** – for simple and portable deployment  
