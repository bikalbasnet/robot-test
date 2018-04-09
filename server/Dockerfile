FROM node:carbon
WORKDIR /usr/src/app
COPY . .
RUN npm install
RUN npm run build
EXPOSE 4001
CMD [ "npm", "run", "serve" ]