FROM node:22

EXPOSE 3001

WORKDIR /src/app

RUN npm install i npm@latest -g

COPY package.json package-lock.json ./

RUN npm install

COPY . .

CMD ["node", "index.js"]
