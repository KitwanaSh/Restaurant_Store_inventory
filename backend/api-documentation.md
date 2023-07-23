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
