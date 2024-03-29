# Use the official Node.js 18 image as base
FROM node:18

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire project directory to the working directory
COPY . .

# Build the Next.js application
RUN npm run build

# Expose the port Next.js runs on (default is 3000)
EXPOSE 3000

# Command to run the Next.js application
CMD ["npm", "start"]
