# RESTful  API with ExpressJS
The `index.js` file is a file that contains the implementation of HTTP server that implements RESTful API rules written using Express.js.
The HTTP server will provide response data in JSON form which will be executed using Postman.

Do the following to run the HTTP server.

## Install ExpressJS
```bash
# NPM
npm install express

# YARN
yarn add express
```

## Run the server in the terminal
```
node index.js
```

## Endpoints

**GET**
> will open the root endpoint with response **{message: “ping successfully"}**

**GET/cars**
> will open a **list of cars**

**GET/cars/:id**
> will open **one car data**

**POST/cars**
> will return the response **data of the cars** that have been created

**PUT/cars/:id**
> will return the existing **cars data** response updated

**DELETE/cars/:id**
> will return the existing **cars data** response erased
