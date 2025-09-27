FROM node:20-slim

# create app dir
WORKDIR /app

# copy package.json and install deps
COPY package.json ./
RUN npm install --only=production

# copy bot script
COPY index.js ./

# set defaults (can be overridden at runtime)
ENV MC_SERVER=127.0.0.1 \
    MC_PORT=25565 \
    MC_EMAIL=bot@example.com \
    RECONNECT_INTERVAL=5000

CMD ["node", "index.js"]
