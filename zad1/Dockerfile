FROM node:latest
WORKDIR /app
COPY ./mongoApi/ .
RUN npm install
EXPOSE 8000
CMD ["node", "server.js"]