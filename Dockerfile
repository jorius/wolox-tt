FROM node:13.14.0-alpine3.10 AS builder

WORKDIR /app
COPY . ./

RUN npm install && exit 0
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/build/ /usr/share/nginx/html/

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
