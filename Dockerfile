FROM node:8.9.4 as builder

WORKDIR /app
COPY package.json .
COPY package-lock.json .
COPY . .
RUN npm install
RUN npm run build

FROM nginx:1.12
WORKDIR /inz-front-end
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder ./dist /inz-front-end
EXPOSE 80
