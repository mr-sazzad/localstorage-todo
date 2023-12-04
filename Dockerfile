FROM node:20.9.0-alpine
WORKDIR /code
COPY . .
RUN npm install
RUN npm run build
EXPOSE 3000

