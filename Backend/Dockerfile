FROM node:22-alpine

WORKDIR home/app

COPY package.json .

RUN npm install

COPY . /home/app

EXPOSE 3000

CMD ["node", "/home/myapp/index.js"]

#docker build -t my-app:1.0.0 .
