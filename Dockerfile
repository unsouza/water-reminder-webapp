FROM node:20-alpine

WORKDIR /usr/src

ENTRYPOINT ["/usr/src/entrypoint.sh"]
