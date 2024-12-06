# Use an official Node.js runtime as a parent image
FROM node:18

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json to the container
COPY package*.json ./

# Install the app dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the app on port 80
EXPOSE 80

# Command to run the application
CMD ["npm", "start"]
