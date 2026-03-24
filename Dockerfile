# Use official Node.js LTS image
FROM node:20

# Set working directory inside container
WORKDIR /usr/src/app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all project files
COPY . .

# Expose port (same as app)
EXPOSE 3000

# Run the app
CMD ["node", "server.js"]