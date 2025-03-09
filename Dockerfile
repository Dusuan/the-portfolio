FROM node:23-alpine3.20
WORKDIR /app

EXPOSE 3000
COPY package*.json ./


COPY . .
COPY prisma ./prisma/

RUN npm install

RUN npx next build

CMD ["npx", "next", "start"]
