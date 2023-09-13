FROM node:alpine
 
WORKDIR /usr/src/app

COPY . .

RUN npm install
RUN ulimit -n 65536

 
EXPOSE 5173

#CMD ["npm", "run", "dev"]
