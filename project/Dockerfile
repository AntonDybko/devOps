FROM node:latest
WORKDIR /app
COPY ./pgApi/ .
RUN npm install
EXPOSE 8000
CMD ["node", "server.js"]