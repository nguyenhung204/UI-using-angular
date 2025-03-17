## build stage ##
FROM node:18.18-alpine AS build

WORKDIR /app
COPY . .

RUN npm install --force
RUN npm run build

## run stage ##
FROM nginx:alpine

COPY --from=build /app/dist/beyond_compass /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf  

EXPOSE 80 
CMD ["nginx", "-g", "daemon off;"]