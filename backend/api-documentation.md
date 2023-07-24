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
## Users

POST: /v1/users

```bash
  JSON body
  
  {
    "name": "string",
    "email": "string",
    "unity": "string", (store id)
    "position": "string"
  }
```

PUT: /v1/users/:id

```bash
  PARAMS

  id: string (user id)

  JSON body

  Same data as POST route, but optional.
```

GET: /v1/users/?page=&q=

```bash
  Query PARAMS

  page: next page to pagination
  q: text to search

  Return all users or filtered users if you pass query params.
```

GET: /v1/users/:id

```bash
  PARAMS

  id: string (return just one user)
```

DEL: /v1/users/:id

```bash
  PARAMS

  id: string (delete just one user)
```

## Products

POST: /v1/products

```bash
  JSON body
  
  {
    "name": "string",
    "description": "string",
    "purchase_price": number,
    "sale_price": number,
    "category": "string", (category id)
    "unity": "string", (store id)
    "provider": "string", (provider id)
    "lot": number,
    "validity": "string", (date on format yyyy-mm-dd)
    "quantity": number
  }
```

PUT: /v1/products/:id

```bash
  PARAMS

  id: string (product id)

  JSON body

  Same data as POST route, but optional.
```

GET: /v1/products/?page=&q=

```bash
  Query PARAMS

  page: next page to pagination
  q: text to search

  Return all products or filtered products if you pass query params.
```

GET: /v1/products/:id

```bash
  PARAMS

  id: string (return just one product)
```

DEL: /v1/products/:id

```bash
  PARAMS

  id: string (delete just one product)
```

## Sellers

POST: /v1/sellers

```bash
  JSON body
  
  {
    "user": "string", (user id)
    "comission": number
  }
```

PUT: /v1/sellers/:id

```bash
  PARAMS

  id: string (seller id)

  JSON body

  Same data as POST route, but optional.
```

GET: /v1/sellers/?page=&q=

```bash
  Query PARAMS

  page: next page to pagination
  q: text to search

  Return all sellers or filtered sellers if you pass query params.
```

GET: /v1/sellers/:id

```bash
  PARAMS

  id: string (return just one seller)
```

DEL: /v1/sellers/:id

```bash
  PARAMS

  id: string (delete just one seller)
```
