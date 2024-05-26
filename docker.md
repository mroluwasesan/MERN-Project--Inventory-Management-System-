# commands

## Creat Docker Network
docker network create mongo-network

## Start mongodb

docker run -d \
-p 27017:207017 \
-e MONGO_INITDB_ROOT_USERAME=admin \
-e MONGO_INITDB_ROOT_PASSWORD=password \
--net mongo-network \
--name mongodb \
mongo

## Start mongo-express

docker run -d \
-p 8081:8081 \
-e MONGO_INITDB_ROOT_USERAME=admin \
-e MONGO_INITDB_ROOT_PASSWORD=password \
-e MONGO_INITDB_ROOT_SERVER=mongodb \
--net mongo-network \
--name mongo-express \
mongo-express