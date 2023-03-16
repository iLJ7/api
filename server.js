const express = require('express')
const app = express()
var mysql = require('mysql2');

app.get('/', (req, res) => {
    console.log('Here')
})

app.get('/users', (req, res) => {
    res.send('User List')
})

RDS_HOSTNAME = 'vehicle-inspection-reports.clucv6sggldw.eu-west-1.rds.amazonaws.com'
RDS_USERNAME = 'admin'
RDS_PASSWORD = 'Wheelo123!'
RDS_PORT = 3306

var connection = mysql.createConnection({
  host     : process.env.RDS_HOSTNAME,
  user     : process.env.RDS_USERNAME,
  password : process.env.RDS_PASSWORD,
  port     : process.env.RDS_PORT
});

connection.connect(function(err) {
    if (err) {
        console.error('Database connection failed: ' + err.stack);
        return;
    }

    console.log('Connected to database.');
})

connection.end();

app.listen(3000)
