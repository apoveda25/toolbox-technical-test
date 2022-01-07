FROM node:12-alpine
WORKDIR /srv/toolbox
RUN /bin/sh -c "apk add --no-cache bash"
COPY . .
RUN yarn install
EXPOSE 4000
CMD ["yarn", "run", "start"]
