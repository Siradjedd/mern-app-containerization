FROM node:alpine

WORKDIR /usr/src/app

COPY . .

RUN npm install
RUN npm install -g nodemon  # Install Nodemon globally
RUN ulimit -n 8192


EXPOSE 3000

#CMD ["npm", "run", "start"]
