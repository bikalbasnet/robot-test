FROM node:carbon as builder
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install --only=production
RUN npm build
COPY . .
RUN npm run build

FROM nginx:alpine
WORKDIR /usr/share/nginx/html
COPY --from=builder /usr/src/app/build/ /usr/share/nginx/html
EXPOSE 80