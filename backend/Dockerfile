# Dockerfile for server

# Build server
FROM node:18-alpine AS base

# Working directory be app
WORKDIR /app

#Copy package.json to the working directory
COPY package.json package-lock.json* ./

#Install dependencies
RUN npm install


#copy the local files to the working directory
COPY . .

EXPOSE 5000

CMD ["npm", "start"]