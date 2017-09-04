
FROM node
RUN mkdir -p /usr/src/app
COPY . /usr/src/app
WORKDIR /usr/src/app
RUN npm install -g truffle
RUN npm install 
RUN npm test