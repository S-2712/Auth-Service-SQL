const express = require("express");
const cors = require("cors");
const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('./swagger-output.json')
const bodyParser = require('body-parser')
const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

/* Middlewares */
app.use(bodyParser.json())
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))

// database
const db = require("./app/models");
const Role = db.role;

db.sequelize.sync();
//force: true //will drop the table if it already exists
/*db.sequelize.sync({force: true}).then(() => {
console.log('Drop and Resync Database with { force: true }');
initial();
});*/

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Wlecome to AuthService." });
});

// routes
require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);

// set port, listen for requests
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

function initial() {
  Role.create({
    id: 1,
    name: "student"
  });
 
  Role.create({
    id: 2,
    name: "parent"
  });
 
  Role.create({
    id: 3,
    name: "teacher"
  });
  Role.create({
    id: 4,
    name: "admin"
  });
  Role.create({
    id: 5,
    name: "moderator"
  });
}

module.exports = app