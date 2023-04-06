var mysql = require('mysql');

function getUsers() {

    let command = 'SELECT * FROM usersTable';
    connection.query(sel, (error, results, fields) => {
      if (error) {
        return console.error(error.message);
      }
      return results;
    })
}

function getUser(username, password) {

    const pass = "aWq*1S98W#Dr";

    var connection = mysql.createConnection({
      host     : 'vehicle-inspection-reports.clucv6sggldw.eu-west-1.rds.amazonaws.com',
      user     : 'company',
      password : pass,
      port     : 3306,
      database : "reports"
    });

    var command = "SELECT * FROM reportsTable"

    var command2 = "SELECT 'userName', 'userPass', 'userRole' FROM usersTable"

    connection.query(command, (error, results, fields) => {
      if (error) {
        return console.error(error.message);
      }

      console.log(results)
    })

    connection.end()
}

function createUser(username, password, role) {

    const pass = "aWq*1S98W#Dr";

    var connection = mysql.createConnection({
      host     : 'vehicle-inspection-reports.clucv6sggldw.eu-west-1.rds.amazonaws.com',
      user     : 'company',
      password : pass,
      port     : 3306,
      database: "users"
    });

    var command = "INSERT INTO usersTable (userName, userPassword, userRole) VALUES (" + "'" + username + "'" + ", " + "'" + password + "'" + ", " + "'" + role + "'" + ")";

    connection.query(command, (error, results, fields) => {
      if (error) {
        return console.error(error.message);
      }

      console.log("User created.")
    })

    connection.end()
}

getUser('luke', 'pass')

module.exports = {
    getUser,
    createUser
};
