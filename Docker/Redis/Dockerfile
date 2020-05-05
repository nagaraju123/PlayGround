# Use an existing docker image as base

# Here alphine is image which we are taking from docker hub
FROM alpine  

# Download and install dependencies related to that image

RUN apk add --update redis
RUN chmod 755 ./


# Tell the image what to do after starts a container

CMD [ "redis-server" ]

