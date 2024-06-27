FROM node:22-alpine

WORKDIR home/app

COPY package.json package-lock.json ./

RUN npm install

COPY . /home/app

EXPOSE 3001

CMD ["npm", "run", "server"]


#docker build -t ims-backend:1.0.0 .
