# Dockerfile for server

# Build server
FROM node:20.13.1

# Working directory be app
WORKDIR /app

#Copy package.json to the working directory
COPY package.json .

#Install dependencies
RUN npm install


#copy the local files to the working directory
COPY . .

EXPOSE 5000

CMD ["npm", "start"]