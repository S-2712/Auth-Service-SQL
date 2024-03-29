# the base image from which the app is built upon
FROM node:16.13.0 
# Runs the mkdire command to create /usr/src/app inside docker container
RUN mkdir -p /usr/src/app  
# Sets the work directory to /usr/src/app 
WORKDIR /usr/src/app  
# Copies the contents of the current directory into the working directory inside the # docker container
COPY . /usr/src/app
# Exposes port 8000 outside the docker container
EXPOSE 8000  
# Runs the npm install command to install dependencies
RUN npm install  
# Provides the command required to run the application
CMD ["npm", "start"]  