# # Dockerfile for server

# # Build server
# FROM node:18-alpine AS base

# # Working directory be app
# WORKDIR /app

# #Copy package.json to the working directory
# COPY package.json package-lock.json* ./

# #Install dependencies
# RUN npm install


# #copy the local files to the working directory
# COPY . .

# EXPOSE 5000

# CMD ["npm", "start"]

# Use official Node.js image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package files separately to improve build cache efficiency
COPY package.json package-lock.json* ./

# Install only production dependencies
RUN npm install && npm install --save-dev jest && npm install -g jest


# Copy the rest of the application files
COPY . .

# Expose the application port
EXPOSE 5000

# Start the application
CMD ["npm","start"]