# Dockerfile for React client

# Use the Node.js base image
FROM node:20.13.1

# Set the working directory to /app
WORKDIR /app

# Copy package.json to the working directory
COPY package.json package-lock.json* ./

# Install dependencies with legacy-peer-deps
RUN npm install --legacy-peer-deps

# Copy all local files to the working directory
COPY . .

# Expose port 5173
EXPOSE 5173

# Run the React app
CMD ["npm", "run", "dev"]
