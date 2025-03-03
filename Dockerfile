FROM node:23-alpine3.20
WORKDIR /app

EXPOSE 3000
COPY package*.json ./

RUN npm install

COPY . .

RUN npm next build

CMD ["npx", "next", "start"]
