FROM node:latest
WORKDIR /app
COPY ./pgApi/ .
RUN npm install
ENV PORT=8000
EXPOSE 8000
CMD ["node", "server.js"]