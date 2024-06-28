FROM node:22-alpine

WORKDIR home/app

COPY package.json package-lock.json ./

RUN npm install

COPY . /home/app

EXPOSE 3001

CMD ["npm", "run", "server"]


#docker build -t ims-backend:1.0.0 .

# # Stage 1: Build Container
# FROM node:14 AS build

# # Set working directory
# WORKDIR /app

# # Copy package.json and package-lock.json
# COPY package*.json ./

# # Install dependencies
# RUN npm install

# # Copy application code
# COPY . .

# # Build the app (you can customize this step based on your build process)
# RUN npm run build

# # Stage 2: Production Container
# FROM node:14-alpine

# # Set working directory
# WORKDIR /app

# # Copy built files from the build stage
# COPY --from=build /app/dist ./dist
# COPY package*.json ./

# # Install production dependencies
# RUN npm install --only=production

# # Expose port (adjust as needed)
# EXPOSE 3000

# # Define the command to run your application
# CMD ["node", "dist/index.js"]