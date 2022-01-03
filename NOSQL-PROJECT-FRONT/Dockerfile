FROM node:12.7-alpine As builder
WORKDIR /src/app
COPY package.json package-lock.json ./
RUN npm install
COPY . ./
RUN npm run build --prod
FROM nginx:1.15.8-alpine
COPY --from=builder ./src/app/dist/projetsoafront /usr/share/nginx/html
