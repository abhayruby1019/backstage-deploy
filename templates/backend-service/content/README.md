## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Prerequisite
node v20,
pnpm v8.7 
```bash
$ brew install pnpm
```

## Installation
```bash
$ pnpm install
```

## Building docker image and running

```bash
$ docker build -t customer-service-starter . 
$ docker run -p 3000:3000 customer-service-starter  
```

## Running the app

```bash
# development
$ pnpm run start

# watch mode
$ pnpm run start:dev

# production mode
$ pnpm run start:prod
```

## Test

```bash
# unit tests
$ pnpm run test

# e2e tests
$ pnpm run test:e2e

# test coverage
$ pnpm run test:cov
```
