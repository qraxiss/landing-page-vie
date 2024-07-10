FROM node:16-alpine

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install
RUN yarn add global npx

COPY . .

RUN yarn build

EXPOSE 3000

CMD ["yarn", "dev"]