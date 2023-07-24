# API Routes

* All routes except the login route receive a token via headers.

## Authentication

POST: /login

```bash
  JSON body

  {
    "email": "string",
    "password": "string"
  }
```

## Dashboard

GET: /v1/dashboard/:days

```bash
  PARAMS

  days: number (filter data by the number of days)
```

## Categories

POST: /v1/categories

```bash
  JSON body
  
  {
    "title": "string"
  }
```

PUT: /v1/categories/:id

```bash
  PARAMS

  id: string (category id)

  JSON body

  {
    "title": "string"
  }
```

GET: /v1/categories

```bash
  Return all categories
```
GET: /v1/categories/:id

```bash
  PARAMS

  id: string (return just one category)
```

DEL: /v1/categories/:id

```bash
  PARAMS

  id: string (delete just one category)
```

## Stores

POST: /v1/stores

```bash
  JSON body
  
  {
    "name": "string",
    "type": "string"
  }
```

PUT: /v1/stores/:id

```bash
  PARAMS

  id: string (store id)

  JSON body

  Same data as POST route, but optional.
```

GET: /v1/stores/?page=&q=

```bash
  Query PARAMS

  page: next page to pagination
  q: text to search

  Return all stores or filtered stores if you pass query params.
```

GET: /v1/stores/:id

```bash
  PARAMS

  id: string (return just one store)
```

DEL: /v1/stores/:id

```bash
  PARAMS

  id: string (delete just one store)
```

