FROM node:22-alpine

ENV MONGO_DB_USERAME=admin \
    MONGO_DB_PWD=password

RUN mkdir -p home/myapp

COPY . /home/myapp

CMD ["node", "/home/myapp/index.js"]

#docker build -t my-app:1.0.0 .