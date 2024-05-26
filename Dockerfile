FROM node:22-alpine

ENV MONGO_DB_USERAME=admin \
- MONGO_DB_PWD=password

RUN mkdir -p home/app

COPY ./home/app

CMD ["node", "home/app/server.js"]