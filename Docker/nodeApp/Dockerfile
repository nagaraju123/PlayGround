
# specify base image 
FROM node:alpine

# install come ddepedencies from package.json 
WORKDIR /usr/nodeapp


COPY ./package.json ./

RUN  npm install
COPY ./ ./

# default command
CMD [ "npm","start" ]


