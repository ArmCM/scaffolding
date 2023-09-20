# Basic Scaffolding API

## Description

This repository provides a template for building applications
using a basic structure of directories

### Software stack

-   [Prisma](https://www.prisma.io/docs/concepts)
-   [Typescript](https://www.typescriptlang.org/docs/)
-   [Express](https://expressjs.com/en/4x/api.html)

# Instructions for run this example

-   Create a local database to use
-   Define the URL connection in file `.env` replace the values to own configuration values

`DATABASE_URL={mysql}://{user}:{password}@{localhost}:{3306}/{database_name}`

-   Run the next commands

Install dependencies: `npm install`

Initialize server: `npm run dev`

Generate prisma client: `npm run prisma-generate`

Create tables in DB: `npm run db-push` (use file from _prisma/schema.prisma_)

Run seeders: `npm run db-seed`

## Test example endpoints

get all data:

`GET: http://localhost:3000/api/example`

get data by id:

`GET: http://localhost:3000/api/example/{id}`

store data:

`POST: http://localhost:3000/api/example`

```json
Body

{
    "title": "example 2",
    "description": "after refactor methods 2",
    "status": 1,
    "delivery_date": "2023-07-03 01:00:27",
    "comments": "alksjdlka",
    "tags": "{'kajsh'}",
    "file": "",
    "states": "work in progress",
    "visibility": "public"
}
```

# Instructions for create and run a new app

WIP

# Documentation

## Routes

```typescript
route.register({
    method: "valid-verb",
    path: "/name-route",
    validators: [customValidation(), customValidationTwo()],
    handlers: [ExampleController.method],
});
```

validators param use [Express validator](https://express-validator.github.io/docs/guides/validation-chain): can add validations body request, headers, query params.
