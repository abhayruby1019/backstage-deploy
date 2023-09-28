
FROM node:20-alpine3.17

RUN npm i -g pnpm
WORKDIR /app

COPY ./next.config.js /app
COPY ./public /app/public
COPY ./package.json /app
COPY ./.next/standalone /app
COPY ./.next/static /app/.next/static

RUN chown -R 1 /app

EXPOSE ${{ values.port }}
USER 1
CMD pnpm
CMD pnpm start
