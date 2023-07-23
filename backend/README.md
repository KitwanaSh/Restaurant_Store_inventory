
System to manage sales, inventory, employees, stores and more.

## Developed with

* [Node](https://nodejs.org/en/)
* [Express](https://expressjs.com/)
* [Prisma](https://www.prisma.io/)
* [PostgreSQL](https://www.postgresql.org/)


## Some features

* ✅ Authentication persistence using jsonwebtoken
* ✅ Protected routes
* ✅ Routes with access permissions based on the logged in user
* ✅ CRUD for each registration functionality
* ✅ Rules for not allowing duplicate entries
* ✅ Search and pagination filters


## Running the API



```bash
  npm install
```

* Rename the .env.example file to just .env and replace the information value with your development environment.

* Make sure you activate your PostgreSQL and run the command below to create the tables

```bash
  npx prisma migrate dev
```

* After creating the tables in the database, run the command below to populate the tables with some initial data (don't skip this step)

```bash
  npx prisma db seed
```

The previous command has populated some data in the database, and by default you can use the following access credentials to login:

```bash
  e-mail: user@mail.com
  password: 1234
```

If all went well so far, the API will be ready to run.


```bash
  npm start
```
