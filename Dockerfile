FROM node:17-alpine
WORKDIR /usr/app
COPY package*.json ./
RUN npm install --quiet
COPY . .
EXPOSE 9005
CMD ["node", "server.js"]
