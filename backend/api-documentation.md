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

