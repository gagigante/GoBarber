<h1 align="center">
  <img alt="GoBarber" title="#GoBarber" src="../.github/logo.png" width="150px" />
</h1>

<h4 align="center">
  GoBarber API
</h4>

<p align="center">
  <a href="#rocket-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#runner-how-to-run">How to run</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#computer-project">Project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
</>

<br>

## :rocket: Technologies

This project was developed with the following techs:

- [Node](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [Typescript](https://www.typescriptlang.org/)
- [TypeORM](https://typeorm.io/)
- [Tsyringe](https://github.com/microsoft/tsyringe)
- [PostgreSQL](https://www.postgresql.org/)
- [MongoDB](https://www.mongodb.com/)
- [Redis](https://redis.io/)
- [JWT](https://jwt.io/)
- [Multer](https://www.npmjs.com/package/multer)
- [Dotenv](https://www.npmjs.com/package/dotenv)
- [Class transformer](https://github.com/typestack/class-transformer)
- [AWS SES](https://aws.amazon.com/pt/ses/)
- [AWS S3](https://aws.amazon.com/pt/s3/)


## :computer: Project

Rest api that provides data to the web and mobile client

## :runner: How to run

> ### Requirements

- Node
- NPM or Yarn
- PostgreSQL
- MongoDB

- (Optional) Docker

<br>
Api reference:
<br>

[![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=GoBarber%20Api&uri=https%3A%2F%2Fraw.githubusercontent.com%2Fgagigante%2FGoBarber%2Fmaster%2F.github%2FInsomnia_Gobarber.json)

<br>

To create PostgreSQL, Mongo and Redis instance using Docker
```
  # POSTGRESQL

  $ docker run --name gobarber-postgres
  -e POSTGRES_USER=docker \
  -e POSTGRES_DB=gobarber
  -e POSTGRES_PASSWORD=docker \
  -p 5432:5432
  -d postgres


  # MONGO

  $ docker run --name gobarber-mongodb -p 27017:27017 -d -t mongo


  # REDIS

  $ docker run --name gobarber-redis -p 6379:6379 -d -t redis:alpine
```

The next step is install dependencies
```
  $ yarn

  # or

  $npm install

```

After that, create a file `.env` based in `.env.example`
```
# It could be a simple MD5 hash
APP_SECRET=YOUR_HASH

APP_API_URL=http://YOUR_CURRENT_IP_ADDRESS:3333
APP_WEB_URL=http://localhost:3000

# Mail implementation | ethereal or ses
MAIL_DRIVER=ethereal

# Storage implementation | disk or s3
STORAGE_DRIVER=disk

# Required if you are going to use ses and/or s3
AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=

# Redis
REDIS_HOST=localhost
REDIS_PORT=6379
REDIS_PASS=

```

Finally, start the server
```
  $ yarn dev:server

  # or

  $ npm dev:server
```

---
