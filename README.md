

## Project setup
 1. Copy the .env.template file and rename it as .env
 2. Get the keys from the GoogleApiConsole and CloudinaryManageConsole

## Development

```bash
$ npm install
$ npm run start
# watch mode
$ npm run start:dev
```
## Development using docker
1. Firs time or in case of changes in dependencies  
```bash
$ docker compose --build
```
2. Start services  
```bash
$ docker compose up 
# detached
$ docker compose up -d 

```


# Production mode
```bash
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

