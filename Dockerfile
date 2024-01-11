# docker build -t spun/backend .
# docker run -p 4000:4000 spun/backend

FROM node:20-alpine 

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

EXPOSE 4000

CMD ["npm", "start"]
